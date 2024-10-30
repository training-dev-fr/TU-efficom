const connect = (login,password) => {
    if(login !== "Aurélien"){
        return {success: false};
    }
    if(password !== "123456"){
        return {success: false};
    }
    return {success: true};
}

module.exports = {connect};