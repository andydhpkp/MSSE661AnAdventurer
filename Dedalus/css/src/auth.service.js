const AUTH_API = `${BASE_API_URL}/auth`;

const create = (formData) => _post(`${AUTH_API}/newUser`, formData);
const login = (formData) => _post(`${AUTH_API}/login`, formData);

const logout = () => {
    clearStorage('isAuth');
    clearStorage('access_token');
    clearStorage('refresh_token');
}