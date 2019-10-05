import { Subject } from "rxjs";

const orderSubject = new Subject();

export const orderService = {
  sendOrder: order => orderSubject.next(order),
  getOrder: () => orderSubject.asObservable(),
  clearOrder: () => orderSubject.next()
};
