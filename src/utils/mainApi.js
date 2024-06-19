class MainApi {
    constructor(props) {
        this.baseUrl = props.baseUrl
    }

    _checkResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`err ${res.status}`)
        } else {
            return res.json()
        }
    }
    
    getUserInfo(token) {
        return fetch(`${this.baseUrl}/api/info-user/`, {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
        .then(this._checkResponseData)
    }

    getGames(token) {
        return fetch(`${this.baseUrl}/api/game/`, {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
        .then(this._checkResponseData)
    }

    createGame(data, token) {
        return fetch(`${this.baseUrl}/api/create-game/`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "name": data.name,
                "class": data.class,
                "count-checkpoint": data.count_checkpoints,
                "status": data.status,
                "background": data.background,
                "checkpoint": data.checkpoint,
                "token": token
            })
            
        })
        .then(this._checkResponseData)
    }

    getTask(userClass, topic, token) {
        return fetch(`${this.baseUrl}/api/crete-task/`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "class_user": userClass,
                "topic": topic
            }) 
        })
        .then(this._checkResponseData)
    }

    saveProgress(gameId, taskId, checkpointNumber, taskNumber, token) {
        return fetch(`${this.baseUrl}/api/create-progress/`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "id_game": gameId,
                "id_task": taskId,
                "chckpoint": checkpointNumber,
                "task": taskNumber
            })
        })
        .then(this._checkResponseData)
    }

    getProgress(id, token) {
        return fetch(`${this.baseUrl}/api/progress/`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id_game": id
            })
        })
        .then(this._checkResponseData)
    }
}

export const mainApi = new MainApi({
    baseUrl: 'http://mistikqw.beget.tech'
})