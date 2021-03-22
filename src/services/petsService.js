export const getAll = (category = '') => {
    let url = 'http://localhost:3030/pets';

    url += (category && category !== 'all') ? `?category=${category}` : '';

    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error.message));
}