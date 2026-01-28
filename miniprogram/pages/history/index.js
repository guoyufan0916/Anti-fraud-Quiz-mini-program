Page({
  data: {
    historyList: []
  },

  onShow() {
    this.getHistory();
  },

  getHistory() {
    // 从缓存获取历史记录
    // 之前我们只存了最新的 quizResult，这里为了演示，我们假设有一个 historyList
    // 实际项目中，应该在 quiz/index.js 结束时，push 到 historyList
    const historyList = wx.getStorageSync('historyList') || [];
    
    // 如果没有列表但有最新结果，尝试兼容一下（演示用）
    if (historyList.length === 0) {
      const lastResult = wx.getStorageSync('quizResult');
      if (lastResult) {
        const mockItem = {
          date: '最近一次',
          score: lastResult.score,
          correctCount: lastResult.correctCount,
          total: lastResult.total
        };
        historyList.push(mockItem);
      }
    }

    this.setData({
      historyList: historyList.reverse() // 最新的在前面
    });
  },

  goQuiz() {
    wx.redirectTo({
      url: '/pages/quiz/index'
    });
  }
});
