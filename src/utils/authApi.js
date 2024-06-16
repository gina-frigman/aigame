class AuthApi {
    constructor(props) {
        this.baseUrl = props.baseUrl   
        this.headers = props.headers
    }

    _checkResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`err ${res.status}`)
        } else {
            return res.json()
        }
    }

    login(data) {
        return fetch(`${this.baseUrl}/auth/token/login/`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                'username': data.username,
                'password': data.password
            })
        })
        .then(this._checkResponseData)
        .then(data => {
            if (data.auth_token) {
                localStorage.setItem('jwt', data.auth_token)
                return data;
            }
        })
    }

    register(data) {
        return fetch(`${this.baseUrl}/api/auth/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'username': data.username,
                'email': data.email,
                'password': data.password
            })
        })
        .then(this._checkResponseData)
    }

    signOut(data, token) {
        return fetch(`${this.baseUrl}/auth/token/logout/`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                token: data.token
            })
        })
        .then(this._checkResponseData)
    }
}

export const authApi = new AuthApi({
    baseUrl: 'http://mistikqw.beget.tech',
    headers: {
        "Content-Type": "application/json",
    }
})