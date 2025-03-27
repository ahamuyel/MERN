// Inportar o express
const express = require('express')
// import express from 'express'

// Criar a aplicação
const app = express()

// Rota GET básica
app.get('/', (req, res) => {
    res.send(`Now u got it!!!\nAnd it's ${new Date().toLocaleTimeString()}`)
})

// Rota GET /api/users
app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, name: "Alberto"},
        {id: 2, name: "Tchiade"},
        {id: 3, name: "Kélcio"}
    ]
    res.json(users)
})

app.get('/api/products', (req, res) => {
    const products = [
        {id: 1, name: "Microphone"},
        {id: 2, name: "Air pods"},
        {id: 3, name: "Car"}
    ]
    res.json(products)
})

// Escuta na porta 3000
const PORT = 3000
app.listen(3000, () => {
    console.log(`Server runnin' in port ${PORT}!`)
})


























// // Inportar o express
// const express = require('express')

// // Criar a aplicação
// const app = express()

// // Rota GET básica

// app.get('/', (req, res) => {
//     res.send("Hi, from Server\nWorkin' with MERN!")
// })

// // Rota GET /api/users
// app.get('/api/users', (req, res) => {
//     const users = [
//         {id: 1, nome: "Alberto"},
//         {id: 2, nome: "Tchiade"}
//     ]
//     res.json(users)
// })

// // Escuta na porta 3000
// const PORT = process.env.PORT || 3000
// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`Servidor rodando na port ${PORT}`)
// })
