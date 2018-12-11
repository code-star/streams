/* eslint no-console: 0 */
import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({ 'test': '456' })
})

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`Codestar Streams Server listening on port ${port}!`),
)
