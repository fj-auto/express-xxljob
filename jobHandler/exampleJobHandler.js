// exampleJobHandler.js
module.exports = {
  async execute(params) {
    console.log('任务执行开始, 参数: ', params);
    // 在这里编写任务处理逻辑
    console.log('任务执行完成');
  },
};
