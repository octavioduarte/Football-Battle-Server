import express, { Express } from 'express'
import setupMiddlewares from './middlewares'
import { RoutesApp } from '../routes/loader'


const routes = new RoutesApp()


let server: Express = express()
setupMiddlewares(server)
server = routes.routesLoader(server)

export const appHttp = {
    server
}