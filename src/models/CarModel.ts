import { Schema, model as createModel, Document } from 'mongoose';
import CarTypeZod from '../Schemas/CarSchema';
import MongoModel from './MongoModel';

interface CarDocument extends CarTypeZod, Document {}

const carSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  seatsQty: Number,
  doorsQty: Number,
});

class CarModel extends MongoModel<CarTypeZod> {
  constructor(model = createModel('Cars', carSchema)) {
    super(model);
  }
}

export default CarModel;