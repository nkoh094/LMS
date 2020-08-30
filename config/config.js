const config = { 
    database: 'lms_db',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        // acquire: 30000,
        idle: 10000,
    },
    privateKey: "$$$lms$$$",
    facebookAuth: {
        clientID: '797442954129952',
        clientSecret: '8e54776ce2a379bfb284941f6d39a2fc'
    }

};

module.exports = config;
