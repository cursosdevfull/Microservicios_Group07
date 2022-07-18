import Order, { STATUS } from "../domain/order";
import OrderRepository from "../domain/order.repository";

export default class AuthApplication {
  readonly repository: OrderRepository;

  constructor(repository: OrderRepository) {
    this.repository = repository;
  }

  async create(order: Order): Promise<Order> {
    const result = await this.repository.insert(order);

    return result;
  }

  async update(transactionId: string, status: STATUS): Promise<string> {
    return this.repository.update(transactionId, status);
  }
}
