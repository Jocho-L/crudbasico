// router = enrutador (http://miproyecto/rutas)
const express = require('express')
const conexion = require('./database/db')
const router = express.Router()

router.get('/', (req, res) => {
  conexion.query('SELECT * FROM libreria', (error, results) => {
    if (error) {
      throw error
    } else {
      res.render('index', { libros: results })
      // res.send(results)  
    }
  })
})

router.get('/create', (req, res) => {
  res.render('create')
})

// Cuando el usuario decide actualizar...
// debemos actualizar la PK y con ella mostrar la vista EDIT

router.get('/edit/:id', (req, res) => {
  conexion.query('SELECT * FROM libreria WHERE id = ?', [req.params.id], (error, results) => {
    if (error) {
      throw error
    } else {
      res.render('edit', { libro: results[0] })
      // res.send(results)  
    }
  })
})

router.get('/delete/:id', (req, res) => {
  conexion.query('DELETE FROM libreria WHERE id = ?', [req.params.id], (error, results) => {
    if (error) {
      throw error
    } else {
      res.redirect('/')
      // res.send(results)
    }
  })
})

// Acceso a CRUD que contiene las operaciones de backend a utilizar
const crud = require('./controllers/crud')
router.post('/save', crud.save)
router.post('/update', crud.update)

module.exports = router
