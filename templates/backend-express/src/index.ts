import express from 'express'
import cors from 'cors'
import { BeagleApp } from '@zup-it/beagle-backend-express'
import { applyRoutes } from './routes'
import { routes as beagleRoutes } from './beagle/screens'

const port = 3000
const expressApp = express()

const corsOptions: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost',
}

expressApp.use(cors(corsOptions)).use(express.json())

expressApp.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

applyRoutes(expressApp)

new BeagleApp(expressApp, beagleRoutes, { basePath: '/beagle' })
