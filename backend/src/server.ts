import { PORT } from './env.js';
import ExpressConfig from './express/express.config.js';

const app = ExpressConfig();

app.listen(PORT, () => console.log('Server Running on Port' + PORT));
