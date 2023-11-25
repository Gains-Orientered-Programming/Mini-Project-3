import { BaseModel } from '../../common/models/baseModel';

export interface PurchaseModel extends BaseModel {
    productName: string;
    quantity: number;
    supplier: string;
    purchaseDate: Date;
    // Add more properties as needed
}
