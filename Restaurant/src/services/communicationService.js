import { Subject } from "rxjs";

const orderSubject = new Subject();

export const orderService = {
  sendOrder: message => orderSubject.next(message),
  getOrder: () => orderSubject.asObservable(),
  clearOrder: () => orderSubject.next()
};
