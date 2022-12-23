import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['asldfdadfsfd'] }))
app.use(router)

app.listen(3000, () => console.log('listining on port 3000'))
