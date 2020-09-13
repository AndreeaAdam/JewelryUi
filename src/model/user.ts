import {GenericModel} from './generic-model';

export class User extends GenericModel{
  public username: string;
  public password: string;
  public firstname: string;
  public lastname: string;
  public telephone: string;
  public email: string;
  public isAdministrator: boolean;
}
