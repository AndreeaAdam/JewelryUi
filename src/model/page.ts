import {GenericModel} from "./generic-model";
import {Pageable} from "./pageable";
import {Sort} from "./sort";

export class Page<T extends GenericModel> {
  public content: T[];
  public pageable: Pageable;
  public totalElements: 7;
  public totalPages: 2;
  public last: false;
  public size: 5;
  public number: 0;
  public sort: Sort;
  public first: boolean;
  public numberOfElements: number;
  public empty: boolean;
}
