import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const CarSchema = z.object({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

type CarTypeZod = z.infer<typeof CarSchema> & Vehicle;

export default CarTypeZod;
export { CarSchema };

export interface Car extends Vehicle {
  doorsQty: number,
  seatsQty: number,
}
