import express from 'express';
import bodyParser from 'body-parser';
import { handleExpenseRequest } from './src/controllers/expenseController';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Define routes
app.post('/expense', handleExpenseRequest);

// Start the server
app.listen(PORT, () => {
    console.log(`Expense Management Service is running on port ${PORT}`);
});
