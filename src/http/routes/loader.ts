
import { Express, Router } from 'express'
import { teamsRoutes } from './teams'



export class RoutesApp {
    routesLoader = (app: Express) => {
        const route: Router[] = [];

        route['teams_routes' as any] = teamsRoutes.router;

        app.use('/teams', route['teams_routes' as any])
        
        return app;
    }
}