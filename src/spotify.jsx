
export const authEndpoint = "https://accounts.spotify.com/authorize"


const redirectUri = "http://localhost:3000/"

const clientId = "a512cc7b81464366b6646f2158ef8e69"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const getToken = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((init,item) => {
            var p = item.split("=")
            init[p[0]] = decodeURIComponent(p[1])

            return init
        },{ })
}

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`