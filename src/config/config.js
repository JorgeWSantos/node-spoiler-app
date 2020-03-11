module.exports = {
    development: {
        database: {
            host: "us-cdbr-iron-east-04.cleardb.net",
            port: "3306",
            name: "heroku_aafeb966462f14c",
            dialect: "mysql",
            user: "b470c8af9b556b",
            password: "0b7b54c2",
        }
    },
    production:{

        database: {
            host: process.env.DB_HOST,
            port: process.env.PORT,
        }
    }
}