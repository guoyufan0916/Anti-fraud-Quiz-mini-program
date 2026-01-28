Page({
  data: {
    todayDate: ''
  },

  onLoad() {
    // 设置今天的日期
    const now = new Date();
    const dateStr = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;
    this.setData({
      todayDate: dateStr
    });
  },

  startQuiz() {
    wx.navigateTo({
      url: '/pages/quiz/index'
    });
  },

  goToRank() {
    wx.switchTab({
      url: '/pages/rank/index'
    });
  },

  onShareAppMessage() {
    return {
      title: '信息工程学院反诈知识竞赛',
      path: '/pages/index/index'
    }
  }
});
