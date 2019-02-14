const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = "?api_key=89caec75c8fbb368ec1a96cb3a28e012";

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