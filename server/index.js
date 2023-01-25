const express = require ('express')
const cors = require ('cors')
const app = express()
app.use(express.json())
app.use(cors())
const {sequelize} = require('./database')


app.get('/9MM', async (req, res) => {
    const info = await sequelize.query(`
    select * from information where platform = '9MM' 
    `)
    res.status(200).send(info[0])
})

app.get('/10MM', async (req, res) => {
    const info = await sequelize.query(`
    select * from information where platform = '10MM' 
    `)
    res.status(200).send(info[0])
})

app.get('/45Colt', async (req, res) => {
    const info = await sequelize.query(`
    select * from information where platform = '45 Colt' 
    `)
    res.status(200).send(info[0])
})

app.get('/223Remington', async (req, res) => {
    const info = await sequelize.query(`
    select * from information where platform = '223 Remington' 
    `)
    res.status(200).send(info[0])
})

app.get('/308Winchester', async (req, res) => {
    const info = await sequelize.query(`
    select * from information where platform = '308 Winchester' 
    `)
    res.status(200).send(info[0])
})


app.listen(4000, () => {
    console.log('listening on 4000')
})