const amqp = require("amqplib");
const args = process.argv.slice(2);

(async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchangeName = "topic-exchange";
  await channel.assertExchange(exchangeName, "topic", { durable: true });
  channel.prefetch(1);

  const assertQueue = await channel.assertQueue("", { exclusive: true });
  const routingKeys = args.length > 0 ? args : ["anonymous.info"];

  for (let i = 0; i < routingKeys.length; i++) {
    await channel.bindQueue(assertQueue.queue, exchangeName, routingKeys[i]);
  }

  channel.consume(
    assertQueue.queue,
    (msg) => {
      if (msg !== null) {
        console.log(
          ` [x] Received ${msg.fields.routingKey}: ${msg.content.toString()}`
        );
      }
    },
    {
      noAck: true,
    }
  );
})();
