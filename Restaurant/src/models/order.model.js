export class OrderDetail {
  constructor(id, name, quantity, price, total) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.total = total;
  }
}

export class Order {
  constructor(id, details, totalAmount, note = "") {
    this.id = id;
    this.details = details;
    this.totalAmount = totalAmount;
    this.note = note;
  }
}
