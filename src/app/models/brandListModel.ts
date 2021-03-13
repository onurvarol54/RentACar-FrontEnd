import { Brand } from './brand';
import { ResponseModel } from './responseModel';

export interface BrandListModel extends ResponseModel {
  data: Brand[];
}
