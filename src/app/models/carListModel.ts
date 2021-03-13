import { Car } from './car';
import { ResponseModel } from './responseModel';

export interface CarListModel extends ResponseModel {
  data: Car[];
}
