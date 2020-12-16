// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const app = express();

app.get('/', function (req, res) {
    res.send('Paseme!');
  });

  app.listen(process.env.PORT, () => {
    console.log('El servidor está en línea en el puerto: ', process.env.PORT);
    });