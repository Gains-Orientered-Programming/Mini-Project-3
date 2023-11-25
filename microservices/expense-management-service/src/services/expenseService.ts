import * as eventTypes from "../../../../common/src/events/eventTypes";
import {
  createConsumer,
  subscribeToTopic,
} from "../../../../common/src/utils/messaging";
import { ExpenseModel } from "../models/expenseModel";

export class ExpenseService {
  private expenseConsumer = createConsumer("expense-group");

  constructor() {
    this.setupConsumers();
  }

  private async setupConsumers() {
    await this.setupExpenseConsumer();
    // Add more consumers for other microservices if needed
  }

  private async setupExpenseConsumer() {
    await subscribeToTopic(
      this.expenseConsumer,
      eventTypes.EXPENSE_EVENT,
      (payload) => {
        const expenseData = JSON.parse(
          payload.message.value.toString()
        ) as ExpenseModel;
        // Process and handle the expense data as needed
        console.log("Received Expense Event:", expenseData);
      }
    );
  }

  // Add more methods related to expense processing as needed
}
