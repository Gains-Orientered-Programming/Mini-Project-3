import { Kafka, Producer, Consumer, EachMessagePayload } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'supply-chain-client',
    brokers: ['localhost:9092'],
});

export const createProducer = (): Producer => kafka.producer();

export const createConsumer = (groupId: string): Consumer => kafka.consumer({ groupId });

export const sendMessage = async (producer: Producer, topic: string, message: string) => {
    await producer.connect();
    await producer.send({ topic, messages: [{ value: message }] });
    await producer.disconnect();
};

export const subscribeToTopic = async (
    consumer: Consumer,
    topic: string,
    eachMessageCallback: (payload: EachMessagePayload) => Promise<void>
) => {
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });
    await consumer.run({ eachMessage: eachMessageCallback });
    // Note: In a real-world scenario, consider handling disconnections and errors.
};

const eachMessageCallback = async (payload: EachMessagePayload): Promise<void> => {
    console.log(`Received message: ${payload.message.value}`);
    // Perform async operations as needed
};
