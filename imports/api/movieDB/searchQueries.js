import { apiKey } from './apiKey';

const baseUrl = 'https://api.themoviedb.org/3';

export const searchQuery = (query) => {
    const movies = fetch(baseUrl + '/search/movie' + apiKey + '&language=en-US&query="' + query)
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            },
            (error) => {
                // error message
                return error
            }
        )

    const tvShows = fetch(baseUrl + '/search/tv' + apiKey + '&language=en-US&query="' + query)
    .then(res => res.json())
    .then(
        (result) => {
            return result;
        },
        (error) => {
            // error message
            return error
        }
    )

    const people = fetch(baseUrl + '/search/person' + apiKey + '&language=en-US&query="' + query)
    .then(res => res.json())
    .then(
        (result) => {
            return result;
        },
        (error) => {
            // error message
            return error
        }
    )

    return [movies, tvShows, people];
}

export const explicitSearch = (type, query, page) => {
    const results = fetch(baseUrl + '/search/' + type + apiKey + '&language=en-US&query="' + query + '&page=' + page)
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            },
            (error) => {
                // error message
                return error
            }
        )

    return results
}