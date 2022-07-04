const amqp = require("amqplib");
const args = process.argv.slice(2);

(async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchangeName = "pubsub-exchange";
  await channel.assertExchange(exchangeName, "fanout", { durable: true });

  const message = args.length > 0 ? args[0] : "message";
  channel.publish(exchangeName, "", Buffer.from(message));

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
})();
