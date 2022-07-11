const amqp = require("amqplib");
const args = process.argv.slice(2);

(async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchangeName = "topic-exchange";
  await channel.assertExchange(exchangeName, "topic", { durable: true });

  const message = args.length > 0 ? args[0] : "message from topic";
  const routingKey = args.length > 1 ? args[1] : "anonymous.info";
  channel.publish(exchangeName, routingKey, Buffer.from(message));
  console.log(" [x] Sent %s:%s", routingKey, message);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
})();
