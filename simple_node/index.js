import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!')
})

app.listen(process.env.PORT, () => {
  console.log('API rodando na porta 3000')
})
