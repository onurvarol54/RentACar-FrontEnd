import { Customer } from './customer';
import { ResponseModel } from './responseModel';

export interface CustomerListModel extends ResponseModel {
  data: Customer[];
}
