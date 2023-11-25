import { BaseModel } from "../../../../common/src/models/baseModel";

export interface ExpenseModel extends BaseModel {
  orderId: string;
  expenseAmount: number;
  expenseCategory: string;
  // Add more properties as needed
}
