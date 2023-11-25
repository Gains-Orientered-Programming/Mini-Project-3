import * as eventTypes from "../../../../common/src/events/eventTypes";
import {
  createConsumer,
  subscribeToTopic,
} from "../../../../common/src/utils/messaging";
import { DeliveryModel } from "../models/deliveryModel";

export class DeliveryService {
  private deliveryConsumer = createConsumer("delivery-group");

  constructor() {
    this.setupConsumers();
  }

  private async setupConsumers() {
    await this.setupDeliveryConsumer();
    // Add more consumers for other microservices if needed
  }

  private async setupDeliveryConsumer() {
    await subscribeToTopic(
      this.deliveryConsumer,
      eventTypes.DELIVERY_EVENT,
      (payload) => {
        const deliveryData = JSON.parse(
          payload.message.value.toString()
        ) as DeliveryModel;
        // Process and handle the delivery data as needed
        console.log("Received Delivery Event:", deliveryData);
      }
    );
  }

  // Add more methods related to delivery processing as needed
}
