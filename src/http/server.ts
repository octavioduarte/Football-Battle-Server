import { appHttp } from './config/app'
import { env } from '../env'


appHttp.server.listen(env.port, () => {
    console.info(`Server HTTP running at port: ${env.port}`)
})