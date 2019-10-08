import { Subject } from "rxjs";
import { Order } from "../models/order.model";

const ordersSubject = new Subject();

let orderId = 1;
let order = new Order(orderId, [], 0);

const orders = [];

const notify = () => {
  ordersSubject.next(copyOrder());
};

const copyOrder = () => {
  return new Order(order.id, [...order.details], order.totalAmount, order.note);
};

const updateOrder = () => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const roundTo2 = value => Math.round(value * 100) / 100;
  const totalAmount = order.details.map(d => d.total).reduce(reducer, 0);
  order.totalAmount = roundTo2(totalAmount);
};

export const ordersDataStorage = {
  ordersChanged: ordersSubject.asObservable(),

  getAll: () => Object.assign({}, order),
  addOrUpdate: newDetail => {
    const detail = order.details.find(o => o.id === newDetail.id);
    if (detail) {
      const quantity = ++detail.quantity;
      detail.total = quantity * detail.price;
    } else order.details.push(newDetail);

    updateOrder();
    notify();
  },
  remove: id => {
    const index = order.details.findIndex(o => o.id === id);
    order.details.splice(index, 1);

    updateOrder();
    notify();
  },
  increaseQty: id => {
    const detail = order.details.find(o => o.id === id);
    const quantity = ++detail.quantity;
    detail.total = quantity * detail.price;

    updateOrder();
    notify();
  },
  decreaseQty: id => {
    const detail = order.details.find(o => o.id === id);
    if (detail.quantity > 1) {
      const quantity = --detail.quantity;
      detail.total = quantity * detail.price;

      updateOrder();
      notify();
    }
  },
  updateNote: message => {
    order.note = message;
  },
  clear: () => {
    order.details = [];

    updateOrder();
    notify();
  },
  send: () => {
    orders.push(copyOrder());
    order = new Order(++orderId, [], 0);
    ordersDataStorage.clear();

    console.warn("Order has been sent for preparation!");
    console.log(orders[orders.length - 1]);
  }
};
