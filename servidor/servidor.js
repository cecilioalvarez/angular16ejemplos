const express = require('express')
const app = express()
const port = 3000
const cors=require("cors");
app.use(cors());


let personas=[];
personas.push({nombre:"david",apellidos:"gomez",edad:20});
personas.push({nombre:"gema",apellidos:"sanchez",edad:30});
personas.push({nombre:"ana",apellidos:"blanco",edad:20});
personas.push({nombre:"antonio",apellidos:"perez",edad:50});




app.get('/personas', (req, res) => {
 res.send(personas);
})


app.listen(port, () => {
  console.log(`trabajando con express en el puerto ${port}`)
})