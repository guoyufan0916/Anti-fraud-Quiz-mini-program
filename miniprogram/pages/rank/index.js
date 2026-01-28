Page({
  data: {
    rankList: [],
    myRank: null
  },

  onShow() {
    this.generateRankData();
  },

  generateRankData() {
    // 模拟排行榜数据
    const mockUsers = [
      { nickName: '反诈先锋', score: 980, avatarUrl: '' },
      { nickName: '安全卫士', score: 850, avatarUrl: '' },
      { nickName: '警钟长鸣', score: 720, avatarUrl: '' },
      { nickName: '小李', score: 600, avatarUrl: '' },
      { nickName: '张三', score: 550, avatarUrl: '' },
      { nickName: '王五', score: 400, avatarUrl: '' },
      { nickName: '赵六', score: 300, avatarUrl: '' },
    ];

    // 获取当前用户数据
    const userInfo = wx.getStorageSync('userInfo');
    const myScore = wx.getStorageSync('totalScore') || 0;

    let rankList = [...mockUsers];
    let myRank = null;

    if (userInfo) {
      // 如果用户已登录，将其加入排行榜比较
      const myData = {
        nickName: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl,
        score: myScore,
        isMe: true
      };
      
      // 简单的插入排序逻辑（为了演示）
      rankList.push(myData);
      rankList.sort((a, b) => b.score - a.score);

      // 找到我的排名
      const index = rankList.findIndex(item => item.isMe);
      if (index !== -1) {
        myRank = {
          ...myData,
          rank: index + 1
        };
      }
    } else {
       rankList.sort((a, b) => b.score - a.score);
    }

    this.setData({
      rankList: rankList.slice(0, 10), // 只显示前10名
      myRank
    });
  }
});
