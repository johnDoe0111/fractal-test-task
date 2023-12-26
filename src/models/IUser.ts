export interface IUserBase {
  tel: string;
  email: string;
}

export interface IUserInfo {
  nickname: string;
  name: string;
  lastname: string;
  category: string;
  advantage?: string;
}

export interface IUserAdvantages {
  advantages: string;
}

export interface IUserAbout {
  about: string;
}
