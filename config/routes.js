const express = require('express');
const router = express.Router();

let db = [
    {'1':{Nome: 'Cliente 1', Id: 20 } },
    {'2':{Nome: 'Cliente 2', Idade: 20 } },
    {'3':{Nome: 'Cliente 3', Idade: '20' } }
]

//Buscar dados
router.get('/', (req, res) => {
    return res.json(db)
})

//Inserir Dados
router.post('/add', (req, res) =>{
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
            
})

router.delete('/:id', (req, res) =>{
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
        return item
    })

    db = newDB
})

module.exports = router