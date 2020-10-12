import {GenericModel} from "./generic-model";

export class Cart extends GenericModel{
  public quantity :number;
  public price: number;
  public isSold: boolean;
  public isPayed: boolean;
  public total: number;

  public productId: number;
  public userId: number;
}
