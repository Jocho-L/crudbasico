const mysql = require('mysql2')
const conexion = mysql.createConnection({
  host:     'localhost',
  user:     'root',
  password: '',
  database: 'librerianode'
})


//Cuando no hay errores, error = NULL
conexion.connect((error) => {
  if (error){
    console.log("Error en la conexión", error)
    return //fin
  }
  //Conexión exitosa
  console.log("Conectado correctamente")
})

//Exportar conexión
module.exports = conexion