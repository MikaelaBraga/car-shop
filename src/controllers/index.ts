import { Request, Response } from 'express';
import Service from '../services';

export type ResponseError = {
  error: unknown;
};

enum ControllerErrors {
  internalErr = 'Internal Server Error',
  notFound = 'Not found',
}

abstract class Controller<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(protected service: Service<T>) {}

  abstract create(req: Request<T>,
    res: Response<T | ResponseError>): Promise<typeof res>;

  read = async (_req: Request, res: Response): Promise<typeof res> => {
    try {
      const vehicles = await this.service.read();
      return res.json(vehicles);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internalErr });
    }
  };
}

export default Controller;