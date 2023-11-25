import { BaseModel } from '../../common/models/baseModel';

export interface ResourceModel extends BaseModel {
    resourceName: string;
    quantity: number;
    location: string;
    status: string;
    // Add more properties as needed
}
