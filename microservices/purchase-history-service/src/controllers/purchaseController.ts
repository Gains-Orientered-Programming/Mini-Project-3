import { Request, Response } from "express";
import { sendMessage } from "../../../../common/src/utils/messaging";
import * as eventTypes from "../../../../common/src/events/eventTypes";

export const handlePurchaseRequest = async (req: Request, res: Response) => {
  const { productName, quantity, supplier, purchaseDate } = req.body;

  // Validate the request if needed

  // Forward the request to the appropriate microservice
  await sendMessage(
    "purchase-events",
    eventTypes.PURCHASE_EVENT,
    JSON.stringify({ productName, quantity, supplier, purchaseDate })
  );

  res
    .status(202)
    .json({ message: "Purchase request forwarded for processing" });
};
