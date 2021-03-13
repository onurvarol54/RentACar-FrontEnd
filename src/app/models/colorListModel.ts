import { Color } from './color';
import { ResponseModel } from './responseModel';

export interface ColorListModel extends ResponseModel {
  data: Color[];
}
