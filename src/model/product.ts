import {GenericModel} from './generic-model';
import {Gender} from './gender';
import {Category} from './category';

export class Product extends GenericModel{
  public name: string;
  public price: number;
  public description: string;
  public detail: string;
  public quantity: number;

  public categoryId: number;
  public genderId: number;

  public gender: Gender;
  public category: Category;
}
