class AuthApi {
    constructor(props) {
        this.baseUrl = props.baseUrl   
        this.headers = props.headers
    }

    _checkResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`err ${res.status}`)
        }
    }

    login(data) {
        return fetch(`${this.baseUrl}/auth/token/login/`, {
            headers: {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify({
                    'username': data.username,
                    'password': data.password
                })
            }
        })
        .then(this._checkResponseData)
        .then(data => {
            if (data.token) {
                return data;
            }
        })
    }

    register(data) {
        console.log(data)
        return fetch(`${this.baseUrl}/api/auth/users/`, {
            headers: {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify({
                    'username': data.login,
                    'email': data.email,
                    'password': data.password
                })
            }
        })
        .then(this._checkResponseData)
    }

    signOut(data, token) {
        return fetch(`${this.baseUrl}/auth/token/logout/`, {
            headers: {
                method: "POST",
                headers: {
                    "Authorization": `Token ${token}`,
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    token: data.token
                })
            }
        })
        .then(this._checkResponseData)
    }
}

export const authApi = new AuthApi({
    baseUrl: 'http://mistikqw.beget.tech',
    headers: {
        "Content-Type": "application/json"
    }
})