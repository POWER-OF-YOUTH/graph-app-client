
/**
 * 
 * @param {{login: String, password: String, email: String, sex: String, name: String, surname: String, patronymic: String}} data User data
 * @returns {Promise<void>}
 */
function register(data) {
    let response = await fetch("auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    });
    
    if(response.ok)
        return;

    throw "Can't connect to server!";
}