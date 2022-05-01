import { expect } from 'chai';
import sinon from 'sinon';
import CarService from '../../../services/CarService'

describe('car service layer test', () => {
  const carService = new CarService();
  
  describe('add new car', () => {
    const carMock = {
      _id: "626dd8f9bd1550fc5dc57ea4",
      model: "Ferrari",
      year: 1963,
      color: "red",
      buyValue: 350000,
      seatsQty: 2,
      doorsQty: 2
    }

    const carInput = {
      model: "Ferrari",
      year: 1963,
      color: "red",
      buyValue: 350000,
      seatsQty: 2,
      doorsQty: 2
    }
    
    it('should return all properties required', async () => {
      sinon.stub(carService, 'create').resolves(carMock);
      const car = await carService.create(carInput);

      expect(car).to.be.have.property('_id');
      expect(car).to.be.have.property('model');
      expect(car).to.be.have.property('year');
      expect(car).to.be.have.property('color');
      expect(car).to.be.have.property('buyValue');
      expect(car).to.be.have.property('seatsQty');
      expect(car).to.be.have.property('doorsQty');
    });
  });

});