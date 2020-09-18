import {GenericModel} from './generic-model';

export class User extends GenericModel{
  public userName: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public telephone: string;
  public email: string;
  public isAdministrator: boolean;
}
