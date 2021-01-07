export enum ResponseType {
  OK,
  ERROR,
  UNKNOWN,
}

export interface RequestResponse<T> {
  code: ResponseType;
  data: T;
}
