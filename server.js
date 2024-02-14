const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000


const pokeStarters = {
    'charmander': {
        'name': 'Charmander',
        'evolve': 'Charmeleon',
        'type': 'Fire'
    },
    'bulbasaur': {
        'name': 'Bulbasaur',
        'evolve': 'Ivysaur',
        'type': 'Grass'
    },
    'squirtle': {
        'name': 'Squirtle',
        'evolve': 'Wartortle',
        'type': 'Water'
    },
    'unkown': {
        'name': 'Unknown',
        'evolve': 'No known evolve',
        'type': 'No type'
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res) => {
    const pokemon = req.params.name.toLowerCase()
    if (pokeStarters[pokemon]){
        res.json(pokeStarters[pokemon])
    }else {
        res.json(pokeStarters.unkown)
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Gotta Catch em all!`)
})