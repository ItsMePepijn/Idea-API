const express = require('express')
const chalk = require('chalk')
const { append } = require('express/lib/response')

const server = express()
const PORT = 3000

const ideas = require('./ideas.json')


server.get('/', (req, res) => {
  let idea = ideas[Math.floor(Math.random()*ideas.length)]
  let json = {
    idea: idea
  }
  res.json(json)
  console.log(json)
})


server.listen(PORT, () =>{
  console.log(chalk.greenBright('\n   Server started!\n\n') + chalk.blueBright(`   Listening on port ${PORT}\n   http://localhost:${PORT}\n`))
})