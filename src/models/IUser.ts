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

export type UserFull = IUserBase & IUserInfo;
