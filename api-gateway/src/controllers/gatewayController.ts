import { Request, Response } from 'express';
import { sendMessage } from '../../common/utils/messaging';
import * as eventTypes from '../../common/events/eventTypes';

export const handlePurchaseRequest = async (req: Request, res: Response) => {
    const { productName, quantity } = req.body;

    // Validate the request if needed

    // Forward the request to the appropriate microservice
    await sendMessage('purchase-events', eventTypes.PURCHASE_EVENT, JSON.stringify({ productName, quantity }));

    res.status(202).json({ message: 'Request forwarded for processing' });
};
