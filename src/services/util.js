export const getUserData = () => {
    return JSON.parse(localStorage.getItem('userData'));
}

export const setUserData = (data) => {
    return localStorage.setItem('userData', JSON.stringify(data));
}

export const clearUserData = () => {
    localStorage.removeItem('userData');
}

export function createPointer(className, objectId) {
    return { __type: "Pointer", className, objectId };
}

export function addOwner(collection) {
    const { _id } = getUserData();
    collection.owner = createPointer('_User', _id);
    return collection;
}

function createQuery(query) {
    return encodeURIComponent(JSON.stringify(query));
}

export function createPointerQuery(propName, className, objectId) {
    return createQuery({[propName]: createPointer(className, objectId)})
 }

