import * as eventTypes from '../../common/events/eventTypes';
import { createConsumer, subscribeToTopic } from '../../common/utils/messaging';
import { GatewayModel } from '../models/gatewayModel';

export class GatewayService {
    private purchaseConsumer = createConsumer('purchase-group');

    constructor() {
        this.setupConsumers();
    }

    private async setupConsumers() {
        await this.setupPurchaseConsumer();
        // Add more consumers for other microservices if needed
    }

    private async setupPurchaseConsumer() {
        await subscribeToTopic(this.purchaseConsumer, eventTypes.PURCHASE_EVENT, (payload) => {
            const purchaseData = JSON.parse(payload.message.value.toString()) as GatewayModel;
            // Process and handle the purchase data as needed
            console.log('Received Purchase Event:', purchaseData);
        });
    }
}
