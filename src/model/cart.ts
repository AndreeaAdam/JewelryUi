import {GenericModel} from "./generic-model";
import {Product} from "./product";
import {User} from "./user";

export class Cart extends GenericModel{
  public quantity :number;
  public price: number;
  public sold: boolean;
  public payed: boolean;
  public total: number;

  public productId: number;
  public userId: number;

  public product: Product;
  public user: User;
}
