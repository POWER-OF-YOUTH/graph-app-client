import io from 'socket.io-client';

/**
 * 
 * @param {{login: String, password: String, email: String, sex: String, name: String, surname: String, patronymic: String}} data
 * @returns {Promise<{login: String, email: String, sex: String, name: String, surname: String, patronymic: String}>}
 */
async function register(data) {
    const response = await fetch("/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    });
    
    if(response.ok)
        return await response.json();
    else if (response.status === 500)
        throw new Error("Server error!");
    else
        throw new Error("Unexpected error!");
}

/**
 * 
 * @param {{login: String, password: String}} data
 * @returns {Promise<void>}
 */
async function login(data) {
    const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    });
  
    if(response.ok)
        return await response.json();
    else if (response.status === 401)
        throw new Error("Неправильный логин или пароль!");
    else if (response.status === 500)
        throw new Error("Server error!");
    else 
        throw new Error("Unexpected error!");
}

/**
 * 
 * @returns {Promise<void>}
 */
async function logout() {
    const response = await fetch("/auth/logout", {
        method: "POST",
        redirect: 'follow'
    });
    
    if(response.ok)
        return;

    throw new Error("Ошибка!");
}

async function check() {
    const response = await fetch("/auth/check", {
        method: "GET",
        redirect: 'follow'
    });
    
    if(response.ok)
        return true;
    return false;
}

async function getGraphs() {

}

/**
 * 
 * @param {string} graphId 
 */
function socket() {
    const socket = io(`/socket`);

    return socket;
}

const API = { register, login, logout, check, socket };
export default API;