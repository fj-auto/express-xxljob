// xxlJobRoutes.js
const express = require('express');
const router = express.Router();
const exampleJobHandler = require('./jobHandler/exampleJobHandler');

router.post('/runExampleJob', async (req, res) => {
  try {
    const params = req.body.executorParams;
    await exampleJobHandler.execute(params);
    res.status(200).json({ code: 200, msg: '任务执行成功' });
  } catch (error) {
    console.error('任务执行失败: ', error);
    res
      .status(500)
      .json({ code: 500, msg: '任务执行失败', content: error.message });
  }
});

module.exports = router;
