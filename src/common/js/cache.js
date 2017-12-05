import storage from 'good-storage'
const SEARCH_KEY = '_search_'
const SEARH_MAX_LENGTH = 15

function insertArray(arr, val, compare, maxlen) {
    const index = arr.findIndex(compare)
    if (index === 0) {
        return
    }
    if (index > 0) {
        arr.splice(index, 1)
    }
    arr.unshift(val)
    if (maxlen && arr.length > maxlen) {
        arr.pop()
    }
}

function deleteFromArray(arr, compare) {
    const index = arr.findIndex(compare)
    if (index > -1) {
        arr.splice(index, 1)
    }
}

export function saveSearch(query) {
    let seaches = storage.get(SEARCH_KEY, [])
    insertArray(seaches, query, (item) => {
        return item === query
    }, SEARH_MAX_LENGTH)
    storage.set(SEARCH_KEY, seaches)
    return seaches
}

export function loadSearch() {
    return storage.get(SEARCH_KEY, [])
}

export function deleteSearch(query) {
    let seaches = storage.get(SEARCH_KEY, [])
    deleteFromArray(seaches, (item) => {
        return item === query
    })
    storage.set(SEARCH_KEY, seaches)
    return seaches
}

export function clearSearch() {
    storage.remove(SEARCH_KEY)
    return []
}
