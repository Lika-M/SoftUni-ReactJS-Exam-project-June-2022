const baseUrl = 'http://localhost:3030/jsonstore';

export async function getAll() {
    const response = await fetch(`${baseUrl}/plants`);
    const result = await response.json();
    const data = Object.values(result);
    return data;
};

export async function getItemById(id) {
    const response = await fetch(`${baseUrl}/plants/${id}`);
    const result = await response.json();
    return result;
}