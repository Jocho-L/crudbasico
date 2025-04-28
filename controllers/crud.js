// Contener la lógica de nuestra APP (verbos)
const conexion = require('../database/db')

// "save" = verbo = acción (<form action="save"...)
exports.save = (req, res) => {
  // Obtener los datos enviados desde el formulario
  const titulo = req.body.titulo
  const autor = req.body.autor
  const editorial = req.body.editorial
  const precio = req.body.precio

  // console.log(titulo, autor, editorial, precio)
  conexion.query("INSERT INTO libreria SET ?", 
    {titulo: titulo, autor: autor, editorial: editorial, precio: precio},
  (error, results) => {
    if (error){
      console.error("No se pudo registrar el libro", error)
    } else {
      res.redirect('/')
    }
  })
}

exports.update = (req, res) => {
  // Obtener los datos enviados desde el formulario
  const id = req.body.id
  const titulo = req.body.titulo
  const autor = req.body.autor
  const editorial = req.body.editorial
  const precio = req.body.precio

  // console.log(id, titulo, autor, editorial, precio)
  conexion.query("UPDATE libreria SET ? WHERE id = ?", 
    [{titulo: titulo, autor: autor, editorial: editorial, precio: precio}, id],
  (error, results) => {
    if (error){
      console.error("No se pudo actualizar el libro", error)
    } else {
      res.redirect('/')
    }
  })
}
