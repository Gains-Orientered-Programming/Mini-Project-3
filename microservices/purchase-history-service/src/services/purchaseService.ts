import * as eventTypes from "../../../../common/src/events/eventTypes";
import {
  createConsumer,
  subscribeToTopic,
} from "../../../../common/src/utils/messaging";
import { PurchaseModel } from "../models/purchaseModel";

export class PurchaseService {
  private purchaseConsumer = createConsumer("purchase-group");

  constructor() {
    this.setupConsumers();
  }

  private async setupConsumers() {
    await this.setupPurchaseConsumer();
    // Add more consumers for other microservices if needed
  }

  private async setupPurchaseConsumer() {
    await subscribeToTopic(
      this.purchaseConsumer,
      eventTypes.PURCHASE_EVENT,
      (payload) => {
        const purchaseData = JSON.parse(
          payload.message.value.toString()
        ) as PurchaseModel;
        // Process and handle the purchase data as needed
        console.log("Received Purchase Event:", purchaseData);
      }
    );
  }

  // Add more methods related to purchase processing as needed
}
