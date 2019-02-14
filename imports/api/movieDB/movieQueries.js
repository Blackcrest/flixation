const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = "?api_key=89caec75c8fbb368ec1a96cb3a28e012";

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