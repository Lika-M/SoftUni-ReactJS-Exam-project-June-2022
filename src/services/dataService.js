import * as api from './api.js';

const endpoints = {
    last: '/data/plants?sortBy=_createdOn%20desc',
    all: '/data/plants',
    type: (type) => `/data/plants?where=type%3D%22${type}%22&sortBy=_createdOn%20desc`,
    myItems: (userId) => `/data/plants?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    create: '/data/plants',
    itemById: '/data/plants/',
    edit: '/data/plants/',
}

export async function getAll(type = '') {
    // console.log(type);
    if (type) {
        if (type === 'All') {
            return api.get(endpoints.last);
        } else {
            return api.get(endpoints.type(type));
        }
    }
    return api.get(endpoints.all);
}


export async function getItemById(id) {
    return api.get(endpoints.itemById + id);
}

export async function createItem(data) {
    return api.post(endpoints.create, data);
}

export async function editItem(data, id) {
    return api.put(endpoints.edit + id, data);
}

export async function deleteItemById(id) {
    return api.delete(endpoints.itemById + id);
}

export async function getMyItems(userId){
    return api.get(endpoints.myItems(userId))
}

