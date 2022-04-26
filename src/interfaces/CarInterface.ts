import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const CarSchema = z.object({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

// extendendo um type --> https://www.typescriptlang.org/docs/handbook/advanced-types.html
export type Car = z.infer<typeof CarSchema> & Vehicle;
