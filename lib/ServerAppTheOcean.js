const express = require('express')
const app = express()
app.use(express.json())
const port = 3000;

app.get('/', (req, res) => {
    res.json({message: "HackTheOcean Api, BIENVENIDO!"});
});

app.get('/Introduccion', (req, res) => {
    res.json({introduccion: "Aquí encontrarás información acerca de las especies marinas mexicanas en peligro de extinción",
    invitacion: "Aqui podrás conocer acerca de estas especies bajo los siguientes nombres:",
    nombres_disponibles_de_busqueda: "Tortuga caguama, Ambystoma mexicanum, Trichechus manatus, Phocoena sinus"});
});

app.listen(port, () => {
 console.log(`puede ver su información en el localhost: ${port}`)
});