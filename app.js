//Express = Framework pra JS Backend (node)
const express = require('express')
const app = express()

//Definir un motor de plantillas
app.set('view engine', 'ejs');

//Configuracion middleware (COMUNICACIÓN DE DATOS ENTRE APLICACIONES)
app.use(express.urlencoded({extended: false}))
app.use(express(express.json));

//Incorporar nuestro enrutador
app.use('/', require('./router'))

//Servidor local de pruebas
app.listen(5000, () => {
  console.log("Servidor ejecutado http://localhost:5000")
})
