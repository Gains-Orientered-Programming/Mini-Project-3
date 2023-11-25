import { Request, Response } from "express";
import { sendMessage } from "../../../../common/src/utils/messaging";
import * as eventTypes from "../../../../common/src/events/eventTypes";

export const handleDeliveryRequest = async (req: Request, res: Response) => {
  const { orderId, deliveryAddress, deliveryDate } = req.body;

  // Validate the request if needed

  // Forward the request to the appropriate microservice
  await sendMessage(
    "delivery-events",
    eventTypes.DELIVERY_EVENT,
    JSON.stringify({ orderId, deliveryAddress, deliveryDate })
  );

  res
    .status(202)
    .json({ message: "Delivery request forwarded for processing" });
};
