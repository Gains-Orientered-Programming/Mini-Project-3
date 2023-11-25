import express from "express";
import bodyParser from "body-parser";
import { handlePurchaseRequest } from "./controllers/gatewayController";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Define routes
app.post("/purchase", handlePurchaseRequest);

// Start the server
app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
