import * as api from './api.js';

const endpoints = {
    last: '/data/plants?sortBy=_createdOn%20desc',
    all: '/data/plants',
    create: '/data/plants',
    itemById: '/data/plants/',
    edit: '/data/plants/',

}

export async function getAll(type = '') {
    // console.log(type);
    let url = endpoints.all;
    if (type) {
        if (type === 'All') {
            url = endpoints.last;
        } else {
            url = `/data/plants?where=type%3D%22${type}%22`;
        }
    }
    return api.get(url);
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

