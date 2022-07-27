import amqp from "amqplib";

export default class ReceiveMessageService {
  static async confirmedOrder(
    channel: amqp.Channel,
    cb: (message: any) => void,
    exchangeName: string,
    exchangeType: string
  ) {
    await channel.assertExchange(exchangeName, exchangeType, { durable: true });

    const assertQueue = await channel.assertQueue("", { exclusive: true });
    channel.bindQueue(assertQueue.queue, exchangeName, exchangeType);

    channel.consume(assertQueue.queue, (message: any) => cb(message), {
      noAck: false,
    });
  }
}
