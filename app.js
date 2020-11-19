const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Server is active and running at http://localhost:${port}`);
})