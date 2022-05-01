import { z } from 'zod';

const CarSchema = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

type CarTypeZod = z.infer<typeof CarSchema>;

export default CarTypeZod;
export { CarSchema };