const express = require('express')
const app = express()
const port = 3000
const cors=require("cors");
const bodyParser=require("body-parser");
app.use(cors());
app.use(bodyParser.json());

let personas=[];
personas.push({nombre:"david",apellidos:"gomez",edad:20});
personas.push({nombre:"gema",apellidos:"sanchez",edad:30});
personas.push({nombre:"ana",apellidos:"blanco",edad:20});
personas.push({nombre:"antonio",apellidos:"perez",edad:50});




app.get('/personas', (req, res) => {
 res.send(personas);
});

app.get("/personas/:nombre",function(req,res) {


  let listafiltrada=personas.filter(function(elemento) {

    return elemento.nombre==req.params.nombre;
  })

  res.send(listafiltrada[0]);

});


app.put("/personas/:nombre",function(req,res) {


  let listafiltrada=personas.filter(function(elemento) {

    return elemento.nombre==req.params.nombre;
  })

  var personaActualizar=listafiltrada[0];
  personaActualizar.nombre=req.body.nombre;
  personaActualizar.apellidos=req.body.apellidos;
  personaActualizar.edad=req.body.edad;
  res.status(200).send();


});

app.delete("/personas/:nombre",function(req,res) {


  let personaBorrar=personas.filter(function(elemento) {

    return elemento.nombre==req.params.nombre;
  })[0];
  let indice= personas.indexOf(personaBorrar);
  personas.splice(indice,1);

  res.status(204).send();

});

app.post("/personas",function(req,res) {
    console.log(req.body);
    personas.push(req.body);
    res.status(201).send();
})


app.listen(port, () => {
  console.log(`trabajando con express en el puerto ${port}`)
})