import express from "express";
import bodyParser from "body-parser";
import { handleDeliveryRequest } from "./controllers/deliveryControllers";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Define routes
app.post("/delivery", handleDeliveryRequest);

// Start the server
app.listen(PORT, () => {
  console.log(`Delivery Service is running on port ${PORT}`);
});
