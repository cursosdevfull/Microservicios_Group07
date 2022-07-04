const amqp = require("amqplib");
const args = process.argv.slice(2);
(async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchangeName = "direct-exchange";
  await channel.assertExchange(exchangeName, "direct", { durable: true });
  channel.prefetch(1);

  const assertQueue = await channel.assertQueue("", { exclusive: true });
  const routingKeys = args.length > 0 ? args : ["error"];

  for (let i = 0; i < routingKeys.length; i++) {
    await channel.bindQueue(assertQueue.queue, exchangeName, routingKeys[i]);
  }

  channel.consume(
    assertQueue.queue,
    (msg) => console.log(msg.content.toString()),
    {
      noAck: true,
    }
  );
})();
