
import { Request, Response, Router } from 'express'


const router = Router()

router.get('/get-all', async (_req: Request, res: Response) => {
    res.json(true)
})

export const teamsRoutes = {
    router
}