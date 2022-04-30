import CarTypeZod, { CarSchema } from '../interfaces/CarInterface';
import Service, { ServiceError } from './index';
import CarModel from '../models/CarModel';

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
}

export default CarService;