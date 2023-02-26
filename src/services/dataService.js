import * as api from './api.js';
import { addOwner, createPointer, createPointerQuery } from './util';

const endpoints = {
    last: '/classes/Plants?order=-createdAt',
    all: '/classes/Plants',
    type: (type) => `/classes/Plants?where={"type": "${type}"}&order=-createdAt`,
    create: '/classes/Plants',
    itemById: '/classes/Plants/',
    editBbyId: '/classes/Plants/',
    myItems: (userId) => `/classes/Plants?where=${createPointerQuery('owner', '_User', userId)}&order=-createdAt`,
    vote: '/classes/Vote',
    voteById: (plantId) => `/classes/Vote?where=${createPointerQuery('plant', 'Plants', plantId)}`,
    myVote: (plantId, userId) => `/classes/Vote?where={"plant": ${encodeURIComponent(JSON.stringify(createPointer('Plants', plantId)))}, "owner": ${encodeURIComponent(JSON.stringify(createPointer('_User', userId)))}}`

}

export async function getAll(type = '') {
    let data;
    if (type) {
        if (type === 'All') {
            data = await api.get(endpoints.last);
        } else {
            data = await api.get(endpoints.type(type));
        }
        return await data.results;
    }
    data = await api.get(endpoints.all);
    return data.results;
}

export async function getItemById(id) {
    return await api.get(endpoints.itemById + id);
}

export async function createItem(data) {
    addOwner(data)
    const plant = await api.post(endpoints.create, data);
    const plants = await api.get(endpoints.myItems(data.owner.objectId));
    const currentItem = plants.results.find(x => x.objectId === plant.objectId);
    return currentItem;
}

export async function editItem(data, id) {
       await api.put(endpoints.itemById + id, data);
       return await api.get(endpoints.itemById + id);
}

export async function deleteItemById(id) {
    await api.delete(endpoints.itemById + id);
}

export async function getMyItems(id) {
    const res = await api.get(endpoints.myItems(id))
    return res.results;
}

export async function voteForItem(id, data) {
    data.plant = createPointer('Plants', id);
    addOwner(data);
    return await api.post(endpoints.vote, data);
}

export async function getVoteByPlantId(id) {
    const res = await api.get(endpoints.voteById(id));
    return res.results;
}

export async function getMyVoteByPlantId(plantId, userId) {
    const res = await api.get(endpoints.myVote(plantId, userId));
    return res.results;
}

export async function getAllVotes() {
    const res = await api.get(endpoints.vote);
    return res.results;
}