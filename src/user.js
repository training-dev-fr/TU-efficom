const connect = (login,password) => {
    if(login !== "Aurélien"){
        return {success: false};
    }
    if(password !== "123456"){
        return {success: false};
    }
    return {success: true};
}

const auth = async (login,password) => {
    let result = await fetch('http://localhost:3000/connect',{
        method: "POST",
        body: JSON.stringify({
            login: login,
            password: password
        })
    });
    let data = await result.json();
    if(result.ok){
        localStorage.addItem('user',JSON.stringify(data));
    }else{
        console.log(data.message);
    }
}

module.exports = {connect,auth};