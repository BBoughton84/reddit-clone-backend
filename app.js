const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const routesVar = requrie('./routes/blogroutes.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api', routesVar)

app.listen(PORT, function(){
  console.log(`listening on ${PORT} for reddit clone part 2`)
})
