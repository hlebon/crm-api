import Sequelize from 'sequelize'
import config from '../../config-server'

const db = new Sequelize(config.options.database, config.userName, config.password, {
    dialect: "mssql",
    host: config.server,
    port: 1433,
    logging: false,
    dialectOptions: {
        requestTimeout: 3000
    }
})

//define user model
const User = db.define('user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
});

//define the "task" model
const Task = db.define('task', {
    title: Sequelize.STRING,
    dueDate: Sequelize.DATE,
    isCompleted: Sequelize.BOOLEAN
})