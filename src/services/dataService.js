import * as api from './api.js';

const endpoints = {
    all: '/data/plants?sortBy=_createdOn%20desc&distinct=type',
    create: '/data/plants',
    itemById: '/data/plants/',
    edit: '/data/plants/',
    delete: '/data/pets/',
}

export async function getAll(type = '') {
    if (type && type !== 'All') {
        const url = `/data/plants?where=type%3D%22${type}%22`;
        return api.get(url)
    } 
        return api.get(endpoints.all)
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

