// app.js or index.js
const express = require('express');
const app = express();
const xxlJobRoutes = require('./xxlJobRoutes');

app.use(express.json());
app.use('/xxl-job', xxlJobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
