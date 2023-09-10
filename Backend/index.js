const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

// Create express application
const app = express();
const port = 5000;

app.use(cors());
app.use('/api', apiRoutes);


// Listen to API requests at the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
