import { Request, Response } from 'express';
import Service from '../services';

export type ResponseError = {
  error: unknown;
};

enum ControllerErrors {
  internalErr = 'Internal Server Error',
  notFound = 'Object not found',
  idMustHave = 'Id must have 24 hexadecimal characters',
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

  abstract readOne(
    req: Request< { id: string } >,
    res: Response<T | ResponseError>): Promise<typeof res>;

  abstract update(
    req: Request<{ id: string }, unknown, T>,
    res: Response<T | ResponseError>
  ): Promise<typeof res>;
}

export default Controller;