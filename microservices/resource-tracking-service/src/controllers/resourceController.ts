import { Request, Response } from 'express';
import { sendMessage } from '../../common/utils/messaging';
import * as eventTypes from '../../common/events/eventTypes';

export const handleResourceRequest = async (req: Request, res: Response) => {
    const { resourceName, quantity, location, status } = req.body;

    // Validate the request if needed

    // Forward the request to the appropriate microservice
    await sendMessage('resource-events', eventTypes.RESOURCE_EVENT, JSON.stringify({ resourceName, quantity, location, status }));

    res.status(202).json({ message: 'Resource request forwarded for processing' });
};
