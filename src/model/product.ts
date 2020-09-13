import {GenericModel} from './generic-model';

export class Product extends GenericModel{
  public name: string;
  public price: number;
  public description: string;
  public detail: string;
  public quantity: number;

  public categoryId: number;
  public genderId: number;
}
