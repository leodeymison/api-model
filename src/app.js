const express = require("express")
const app = express()
const connection = require('./database/connection')
const cors = require('cors')

// cors config
app.use(cors())

// Json true config
app.use(express.urlencoded({extended: false}))
app.use(express.json())


//lauricio esteve aqui

// Database conection
connection
    .authenticate()
    .then(console.log('connection success'))
    .catch(error =>  {console.log(error)})

// Tables
require('./database/tables/organization')
require('./database/tables/users')

require('./database/tables/products/categorys')
require('./database/tables/products/categorys_sub')
require('./database/tables/products/product')
require('./database/tables/products/product_comments')
require('./database/tables/products/product_images')
require('./database/tables/products/product_promotion')

require('./database/tables/about/comments')

require('./database/tables/clients/client')
require('./database/tables/clients/client_favorite')

require('./database/tables/departments/requests')



// ROUTERS
app.use("/", require("./routers/organization"))
app.use("/", require("./routers/users"))

app.use("/", require("./routers/about/comments"))


module.exports = app