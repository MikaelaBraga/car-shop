import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarController from '../../../controllers/CarController';


chai.use(chaiHttp);

const { expect } = chai;

describe('car controller layer test', () => {
  beforeEach(sinon.restore);
  const carController = new CarController();

  
  describe('add new car', () => {
    const carMock = {
      _id: "626dd8f9bd1550fc5dc57ea4",
      model: "Ferrari",
      year: 1963,
      color: "red",
      buyValue: 350000,
      seatsQty: 2,
      doorsQty: 2
    } // mockar num arquivo

    const carInput = {
      model: "Ferrari",
      year: 1963,
      color: "red",
      buyValue: 350000,
      seatsQty: 2,
      doorsQty: 2
    } // mockar num arquivo


    // it('should return all properties required', async () => {
    //   sinon.stub(carController, 'create').resolves(carMock);
    //   const car = await carController.create(carInput, carMock);

    //   expect()
    // });

  });

});