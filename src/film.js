import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl=process.env.REACT_APP_BASEURL

export const getFilmList = async() => {
    const film = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    console.log({movieList : film})
    return film.data.results
}
export const searchFilm =async (e) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${e}&page=1&api_key=${apiKey}`)
    return search.data
}