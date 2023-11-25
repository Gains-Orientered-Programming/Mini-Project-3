import { Request, Response } from 'express';
import { sendMessage } from '../../common/utils/messaging';
import * as eventTypes from '../../common/events/eventTypes';

export const handleExpenseRequest = async (req: Request, res: Response) => {
    const { orderId, expenseAmount, expenseCategory } = req.body;

    // Validate the request if needed

    // Forward the request to the appropriate microservice
    await sendMessage('expense-events', eventTypes.EXPENSE_EVENT, JSON.stringify({ orderId, expenseAmount, expenseCategory }));

    res.status(202).json({ message: 'Expense request forwarded for processing' });
};
