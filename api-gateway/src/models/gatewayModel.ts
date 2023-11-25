import { BaseModel } from "../../../common/src/models/baseModel";

export interface GatewayModel extends BaseModel {
  productName: string;
  quantity: number;
  // Add more properties as needed
}
