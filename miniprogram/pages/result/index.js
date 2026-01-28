Page({
  data: {
    score: 0,
    results: []
  },

  onLoad() {
    const result = wx.getStorageSync('quizResult');
    if (result) {
      // 组装结果数据，包含题目信息以便显示
      const formattedResults = result.userAnswers.map((ans, index) => {
        return {
          ...ans,
          question: result.questions[index]
        };
      });

      this.setData({
        score: result.score,
        results: formattedResults
      });
    }
  },

  restart() {
    wx.reLaunch({
      url: '/pages/index/index'
    });
  }
});
