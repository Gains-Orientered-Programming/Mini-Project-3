import * as eventTypes from '../../common/events/eventTypes';
import { createConsumer, subscribeToTopic } from '../../common/utils/messaging';
import { ResourceModel } from '../models/resourceModel';

export class ResourceService {
    private resourceConsumer = createConsumer('resource-group');

    constructor() {
        this.setupConsumers();
    }

    private async setupConsumers() {
        await this.setupResourceConsumer();
        // Add more consumers for other microservices if needed
    }

    private async setupResourceConsumer() {
        await subscribeToTopic(this.resourceConsumer, eventTypes.RESOURCE_EVENT, (payload) => {
            const resourceData = JSON.parse(payload.message.value.toString()) as ResourceModel;
            // Process and handle the resource data as needed
            console.log('Received Resource Event:', resourceData);
        });
    }

    // Add more methods related to resource tracking as needed
}
