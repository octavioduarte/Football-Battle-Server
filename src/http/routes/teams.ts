
import { Request, Response, Router } from 'express'
import { Mock } from '../../mock'


const router = Router()

router.get('/get-all', async (_req: Request, res: Response) => {
    res.json(Mock)
})

export const teamsRoutes = {
    router
}