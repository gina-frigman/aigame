class MainApi {
    constructor(props) {
        this.baseUrl = props.baseUrl
    }

    _checkResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`err ${res.status}`)
        }
    }
    
    getUserInfo(token) {
        return fetch(`${this.baseUrl}/api/auth/users/`, {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
        .then(this._checkResponseData)
    }

    getGames(token) {
        return fetch(`${this.baseUrl}/api/game`, {
            headers: {
                "Authorization": `Token ${token}`,
                "content-type": "application/json"
            }
        })
        .then(this._checkResponseData)
    }

    createGame(data, token) {
        return fetch(`${this.baseUrl}/api/create-game/`, {
            headers: {
                method: "POST",
                headers: {
                    "Authorization": `Token ${token}`,
                    "content-type": "application/json"
                },
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
        .then(this._checkResponseData)
    }

    saveProgress(data, token) {
        return fetch(`${this.baseUrl}/api/create-progress/`, {
            headers: {
                method: "POST",
                headers: {
                    "Authorization": `Token ${token}`,
                    "content-type": "application/json"
                },
                body: {
                    "id_game": data.game.id,
                    "id_task": data.task.id,
                    "chckpoint": data.checkpoint,
                    "task": data.task
                }
            }
        })
        .then(this._checkResponseData)
    }

    getProgress(id, token) {
        return fetch(`${this.baseUrl}/api/progress/${id}/`, {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
        .then(this._checkResponseData)
    }
}

export const mainApi = new MainApi({
    baseUrl: 'http://mistikqw.beget.tech'
})