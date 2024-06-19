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

    setFIO(data, token) {
        const name = data.firstname + ' ' + data.lastname
        return fetch(`${this.baseUrl}/api/create-fullname/`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "FIO_user": name
            })
        })
    }

    signOut(token) {
        return fetch(`${this.baseUrl}/auth/token/logout`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
                "content-type": "application/json"
            }
        })
        .then(res => {
            if (res) {
                return res
            }
        })
    }
}

export const authApi = new AuthApi({
    baseUrl: 'http://mistikqw.beget.tech',
    headers: {
        "Content-Type": "application/json",
    }
})