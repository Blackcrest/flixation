import { apiKey } from './apiKey';

const baseUrl = 'https://api.themoviedb.org/3';

export const getDetail = (id) => {
    const movie = fetch(baseUrl + '/movie/' + id + apiKey + '&language=en-US')
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

    return movie;
}