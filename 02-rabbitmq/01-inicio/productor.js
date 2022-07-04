const amqp = require("amqplib");
const args = process.argv.slice(2);

(async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const nameQueue = "queue01";
  await channel.assertQueue(nameQueue, { durable: false });

  const message = args.length > 0 ? args[0] : "message";

  channel.sendToQueue(nameQueue, Buffer.from(message));

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 4000);
})();
