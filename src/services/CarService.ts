import CarTypeZod, { CarSchema } from '../Schemas/CarSchema';
import Service, { ServiceError } from './index';
import CarModel from '../models/CarModel';
import { Car } from '../interfaces/CarInterface';

class CarService extends Service<CarTypeZod> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create =
  async (obj: CarTypeZod): Promise<CarTypeZod | ServiceError | null> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };

  read = async (): Promise<Car[]> => this.model.read();

  readOne = async (id: string):
  Promise<Car | null> => this.model.readOne(id);
}

export default CarService;