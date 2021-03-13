import { Rental } from './rental';
import { ResponseModel } from './responseModel';

export interface RentalListModel extends ResponseModel {
  data: Rental[];
}
