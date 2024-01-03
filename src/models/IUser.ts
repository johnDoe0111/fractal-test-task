export interface IUserBase {
  tel: string;
  email: string;
}

export interface IUserInfo {
  nickname: string;
  name: string;
  lastname: string;
  category: string;
  advantages: string;
  about: string;
}

export interface RejectedWithValueAction<ThunkArg, RejectedValue> {
  type: string;
  payload: RejectedValue;
  error: { message: 'Rejected' };
  meta: {
    requestId: string;
    arg: ThunkArg;
    aborted: boolean;
  };
}

export type UserFull = IUserBase & IUserInfo;
