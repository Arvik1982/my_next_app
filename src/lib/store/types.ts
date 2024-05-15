export interface IUser {
  first_name: string;
  second_name: string;
  email: string;
  uid: string;
  photo: string;
  profile_cover: string;
  username: string;
  birthday: string;
  registered_at: string;
  work_status: number;
  expert: boolean;
  last_visited_at: string;
  last_password_change_at: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  isSignUp: boolean;
  isLoading: boolean;
  user: IUser | null;
}

export interface ISignUp {
  first_name: string;
  second_name: string;
  email: string;
  password: string;
}

export interface IChangeEmail {
  new_email: string;
  password: string;
}

export interface IChangePassword {
  current_password: string;
  new_password: string;
  confirm_new_password: string;
}

export interface InfoProfileState {
  aboutYourself: string;
  city: string;
  country: string;
  date: string;
  firstName: string;
  gender: string;
  gmt: string;
  language: string;
  lastName: string;
  grade: string;
  link: string;
  status: string;
  skills: string;
  specializations: Specialization[];
}

export interface Specialization {
  id?: number;
  name: string;
  direction: {
    id?: number;
    name: string;
  };
}

export interface ContactsState {
  phone: {
    phoneCode: string;
    phoneNumber: string;
  };
  email: string;
  networks: ISocialNetwork[];
  site: string;
  links: {
    linkName: string;
    linkURL: string;
  }[];
}

export interface ISocialNetwork {
  id?: number;
  network_name: string;
  username: string;
  key?: string;
}

export interface ProfileState {
  profile: InfoProfileState;
  contacts: ContactsState;
  isLoading: boolean;
  specializationIds: number[];
  directionIds: number[];
}

export interface IUpdateUser {
  first_name: string;
  second_name: string;
  username: string;
  birthday: string;
}

export interface ISocialNetwork {
  network_name: string;
  username: string;
}

export interface IUpdatePhotos {
  photo: string;
  profile_cover: string;
}

export interface IUpdateWorkStatus {
  work_status: string;
}

export interface IDirection {
  id: number;
  name: string;
}

export interface IUserSpecialization {
  grade: string;
  status: string;
  uid: string;
  specializations: Specialization[];
}

export interface IUserSpecializationBody {
  grade: string;
  status: string;
  specialization_ids: number[];
}

export interface ISpecialists {
  first_name: string;
  second_name: string;
  email: string;
  uid: string;
  username: string;
  photo: string;
  last_visited_at: string;
  specialization: IUserSpecialization;
}

export interface ISpecQueryParam {
  grade__in: string;
  status__in: string;
  specialization__id__in: number;
  specialization__direction_id__in: number;
}
