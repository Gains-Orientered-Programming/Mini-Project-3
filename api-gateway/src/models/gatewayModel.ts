import { BaseModel } from '../../common/models/baseModel';

export interface GatewayModel extends BaseModel {
    productName: string;
    quantity: number;
    // Add more properties as needed
}
