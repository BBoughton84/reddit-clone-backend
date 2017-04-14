const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const routesVar = require('./routes/blogroutes.js')
const commVar = require('./routes/commentroutes.js')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use('/blogs', routesVar)
app.use('/comments', commVar)

app.listen(PORT, function(){
  console.log(`listening on ${PORT} for reddit clone part 2`)
})
