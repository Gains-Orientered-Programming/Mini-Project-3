import { BaseModel } from '../../common/models/baseModel';

export interface DeliveryModel extends BaseModel {
    orderId: string;
    deliveryAddress: string;
    deliveryDate: Date;
    // Add more properties as needed
}
