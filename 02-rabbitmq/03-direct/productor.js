const amqp = require("amqplib");
const args = process.argv.slice(2);

(async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchangeName = "direct-exchange";
  await channel.assertExchange(exchangeName, "direct", { durable: true });

  const message = args.length > 0 ? args[0] : "message";
  const routingKey = args.length > 1 ? args[1] : "key-direct";
  channel.publish(exchangeName, routingKey, Buffer.from(message), {
    persistent: true,
  });

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
})();
