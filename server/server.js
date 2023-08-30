import dotenv from 'dotenv';
import { app } from './app.js';

dotenv.config();

const PORT = process.env.PORT || '5050';

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});