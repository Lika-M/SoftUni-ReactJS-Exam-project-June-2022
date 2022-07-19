export async function getAll(){
    const response = await fetch('http://localhost:3030/jsonstore/plants');
    const result = await response.json();
    const data = Object.values(result);
    return data;
};