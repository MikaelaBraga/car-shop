import { Request, Response } from 'express';
import Controller from '.';
import CarService from '../services/CarService';
import CarTypeZod from '../interfaces/CarInterface';

class CarController extends Controller<CarTypeZod> {
  private $route: string;

  constructor(service = new CarService(), route = '/cars') {
    super(service);
    this.$route = route;
  }

  get route() { return this.$route; }

  create = async (req: Request, res: Response): Promise<typeof res> => {
    const { body } = req;

    try {
      const car = await this.service.create(body);
      if (!car) return res.status(500).json({ error: this.errors.notFound });
      if ('error' in car) return res.status(400).json(car);

      return res.status(201).json(car);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internalErr });
    }
  };
}

export default CarController;