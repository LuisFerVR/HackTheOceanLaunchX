const express = require('express')
const app = express()
app.use(express.json())
const port = 3000;

app.get('/', (req, res) => {
    res.json({message: "HackTheOcean Api, BIENVENIDO!"});
})

app.listen(port, () => {
 console.log(`puede ver su información en el localhost: ${port}`)
})