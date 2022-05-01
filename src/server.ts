import CustomRouter from './routes/Router';
import App from './app';

import CarTypeZod from './Schemas/CarSchema';
import CarController from './controllers/CarController';

const server = new App();

const carController = new CarController();
const carRouter = new CustomRouter<CarTypeZod>();
carRouter.addRoute(carController);

server.addRouter(carRouter.router);

export default server;
