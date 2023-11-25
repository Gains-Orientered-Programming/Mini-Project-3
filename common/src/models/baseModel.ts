// Create a base model that other models will extend

export interface BaseModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface PurchaseModel extends BaseModel {
    // Properties specific to the Purchase model
    productName: string;
    quantity: number;
}
