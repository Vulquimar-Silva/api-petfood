const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1/petfood';

mongoose.set("strictQuery", true);
mongoose.set('debug', true);

mongoose
  .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(() => console.log('The database is on.'))
  .catch((err) => console.error(err));