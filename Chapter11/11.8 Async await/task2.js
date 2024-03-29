class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
  
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return await response.json();
    } else {
        throw new Error(response.status);
    }
}

async function demoGithubUser() {
    let user;
    let isFinish = false;
    while (!isFinish){
        let name = prompt("Введите логин?", "iliakan");
        try {
            user = await loadJson(`https://api.github.com/users/${name}`)
            isFinish = true;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }

    console.log(`Полное имя: ${user.name}.`);
    return user;
}