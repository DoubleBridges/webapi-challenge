import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import projectRouter from './routers/projectRouter'
import actionRouter from './routers/actionRouter'

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use(morgan('dev'))

server.use('/api/projects', projectRouter)
server.use('/api/*/actions', actionRouter)

server.get('/', (req, res) => {
  res.send(`
    <h2>WebAPI-Sprint Challeng API<h2>
  `)
})

export default server