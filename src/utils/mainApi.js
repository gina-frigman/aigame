function MainApi(props) {
    const baseUrl = props.baseUrl
    const headers = props.headers

    function _checkResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`err ${res.status}`)
        }
    }
    
    function getUserInfo(token) {
        return fetch(`${baseUrl}/api/auth/users`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(_checkResponseData)
    }

    function getGames(token) {
        return fetch(`${baseUrl}/api/game`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(_checkResponseData)
    }

    function createGame(data, token) {
        return fetch(`${baseUrl}/api/create-game`, {
            headers: {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    "name": data.name,
                    "class": data.class,
                    "count-checkpoint": data.countCheckpoint,
                    "status": data.status,
                    "background": data.background,
                    "checkpoint": data.checkpoint,
                    "token": token
                })
            }
        })
        .then(_checkResponseData)
    }
}

export const mainApi = new MainApi({
    baseUrl: 'http://mistikqw.beget.tech',
    headers: {
        "content-type": "application/json"
    }
})