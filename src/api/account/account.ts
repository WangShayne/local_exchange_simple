import { defHttp } from '/@/utils/http/axios';
import { AccountParams, AccountResultModel } from './model/accountModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  createAccount = '/account',
  updateAccount = '/account',
  getAccoutById = '/account',
  getAccoutByName = '/accounts',
  getAccouts = '/accounts',
  delAccount = '/accounts',
}

export function createAccoutApi(params: AccountParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<AccountResultModel>(
    { url: Api.createAccount, params },
    { errorMessageMode: mode },
  );
}

export function updateAccoutApi(params: AccountParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<AccountResultModel>(
    { url: Api.createAccount + params.tarder_id, params },
    { errorMessageMode: mode },
  );
}

export function getAccoutById(params: AccountParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<AccountResultModel>(
    { url: Api.getAccoutById, params },
    { errorMessageMode: mode },
  );
}

export function getAccoutByName(params: AccountParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<AccountResultModel>(
    { url: Api.getAccoutByName, params },
    { errorMessageMode: mode },
  );
}

export function getAccouts(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<AccountResultModel[]>({ url: Api.getAccouts }, { errorMessageMode: mode });
}

export function delAccount(params: AccountParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete<AccountResultModel>(
    { url: Api.delAccount, params },
    { errorMessageMode: mode },
  );
}
