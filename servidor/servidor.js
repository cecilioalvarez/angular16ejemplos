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

app.post("/personas",function(req,res) {
    console.log(req.body);
    personas.push(req.body);
    res.status(201).send();
})


app.listen(port, () => {
  console.log(`trabajando con express en el puerto ${port}`)
})