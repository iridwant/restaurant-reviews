const express = require('express')
const session = require('express-session')
const route = require('./routes')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}))

app.use('/', route)

app.listen(port, () => {
    console.log(`Server is active and running at http://localhost:${port}`);
})