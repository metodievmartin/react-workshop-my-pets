const url = 'http://localhost:3030/pets';

export const getAll = (category = '') => {
    let petsUrl = url + ((category && category !== 'all') ? `?category=${category}` : '');

    return fetch(petsUrl)
        .then(response => response.json())
        .catch(error => console.log(error.message));
}

export const getOne = (petId) => {
    return fetch(`${url}/${petId}`)
        .then(response => response.json())
        .catch(error => console.log(error.message));
}