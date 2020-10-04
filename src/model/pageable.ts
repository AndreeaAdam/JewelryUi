import {Sort} from "./sort";

export class Pageable {
  public sort: Sort;
  public offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}
