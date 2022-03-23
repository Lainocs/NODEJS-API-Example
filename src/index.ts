import express from 'express';
import bodyParser from 'body-parser';
import router from './api/routes';

const app = express();

app.use(bodyParser.json());
app.use('/api', router);

app.listen(3000, () => {
  // console.log('Server is running on port 3000');
});
