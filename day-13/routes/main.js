const register = require ('./register.route')
const activation = require ('./activation.route')
const login = require ('./login.route')
const reset = require ('./reset.route')
const role = require ('./role.route')
const user = require ('./user.route')

const routes = (app) => {
    app.use('/register', register)
    app.use('/activation', activation)
    app.use('/login', login)
    app.use('/reset', reset)
    app.use('/role', role)
    app.use('/user', user)
}

module.exports = routes