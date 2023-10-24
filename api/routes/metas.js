var express = require('express');
const { pedirTodas } = require('../db/pedidos');
var router = express.Router();

let metas =[
  {
    "id": "1",
    "detalles": "Correr por 30 minutos",
    "periodo": "día",
    "eventos": 1,
    "icono": "🏃‍♂️",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 5
  },
  {
    "id": "2",
    "detalles": "Leer libros",
    "periodo": "año",
    "eventos": 6,
    "icono": "📚",
    "meta": 12,
    "plazo": "2030-01-01",
    "completado": 0
  },
  {
    "id": "3",
    "detalles": "Viajar a parques nacionales",
    "periodo": "mes",
    "eventos": 1,
    "icono": "✈️",
    "meta": 60,
    "plazo": "2030-01-01",
    "completado": 40
  }
];

/* GET lista de metas */
router.get('/', function(req, res, next) {
  pedirTodas('metas',(err,metas)=>{
      if(err){
         return next(err);
      }
      console.log(metas)
      res.send(metas);
  });
});

/* GET Meta con id */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const meta = metas.find(item => item.id === id);
  if (!meta){
    return res.sendStatus(404);
  }
  res.send(meta);
});

/* post crear Meta */
router.post('/', function(req, res, next) {
  const meta = req.body;
  metas.push(meta);
  res.status(201);
  res.send(meta);
});

/* put actualizar meta*/
router.put('/:id', function(req, res, next) {

     const meta = req.body;
     const id = req.params.id;
     const indice = metas.findIndex(item => item.id === id);
     if (meta.id !== id) {
       return res.sendStatus(409);
     }
     if (indice === -1) {
       return res.sendStatus(404);
     }
     metas[indice] = meta;
     res.send(meta);
});

/*  borrar Meta */
router.delete('/:id', function(req, res, next) {
  const id = req.params.id;
  const indice = metas.findIndex(item => item.id === id);
  if (indice === -1){
    return res.sendStatus(404);
  }
  metas.splice(indice,1);
  res.sendStatus(204);
});

module.exports = router;
