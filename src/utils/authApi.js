function AuthApi(props) {
    const baseUrl = props.baseUrl
    const headers = props.headers

    function _checkResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`err ${res.status}`)
        }
    }

    function login(data) {
        return fetch(`${baseUrl}/auth/token/login`, {
            headers: {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    'username': data.username,
                    'password': data.password
                })
            }
        })
        .then(_checkResponseData)
        .then(data => {
            if (data.token) {
                return data;
            }
        })
    }

    function register(data) {
        return fetch(`${baseUrl}/api/auth/users`, {
            headers: {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    'username': data.username,
                    'email': data.email,
                    'password': data.password
                })
            }
        })
        .then(_checkResponseData)
    }

    function signOut(data) {
        return fetch(`${baseUrl}/auth/token/logout`, {
            headers: {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    token: data.token
                })
            }
        })
        .then(_checkResponseData)
    }
}

export const authApi = new AuthApi({
    baseUrl: 'http://mistikqw.beget.tech',
    headers: {
        "content-type": "application/json"
    }
})