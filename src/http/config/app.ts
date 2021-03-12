import express from 'express'
import setupMiddlewares from './middlewares'


let server = express()
setupMiddlewares(server)


export const appHttp = {
    server
}