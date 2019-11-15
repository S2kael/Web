
function LoginDAO(MysqlDB, jwt, CryptoJS) {

    this.postLogin = function (user, callback) {

        //get password for user
        var sql = "select * from Users where Name = ?";
        MysqlDB.query(sql, user.Name, function (error, result) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error":error
                });
            }
            else {
                if (result.length === 0) {
                    callback({
                        "status": "error",
                        "code": "401"
                    });
                }
                else {

                    if (result[0].checkMail !== 0) {

                        var bytes = CryptoJS.AES.decrypt(result[0].Password.toString(), 'secretKey');
                        var password = bytes.toString(CryptoJS.enc.Utf8);

                        console.log('this is password', password);

                        if (user.Password === password) {
                            jwt.sign({ user: result[0] }, 'secretKey', { expiresIn: '1h' }, function (error, token) {
                                if (error) {
                                    callback({
                                        "status": "error",
                                        "code": "401"
                                    });
                                }
                                else {
                                    callback(token);
                                }
                            });
                        }
                        else {
                            callback({
                                "status": "error",
                                "code": "401"
                            });
                        }
                    }
                    else {
                        callback({
                            "status": "error",
                            "code": "401 not checkmail"
                        });
                    }

                }
            }
        });

        //end get password for user
    }

}


module.exports = {
    LoginDAO: LoginDAO
}