Page({
  data: {
    userInfo: null,
    level: 1,
    userData: {
      totalScore: 0,
      quizCount: 0,
      rank: 0
    },
    studyDays: 1,
    hasCheckedIn: false,
    badges: [
      { id: 1, name: '初出茅庐', icon: '../../images/icons/goods-active.png', unlocked: true },
      { id: 2, name: '答题达人', icon: '../../images/icons/goods-active.png', unlocked: false },
      { id: 3, name: '反诈先锋', icon: '../../images/icons/goods-active.png', unlocked: false },
      { id: 4, name: '知识渊博', icon: '../../images/icons/goods-active.png', unlocked: false }
    ]
  },

  onShow() {
    this.updateUserData();
    this.checkCheckInStatus();
  },

  getUserProfile() {
    wx.getUserProfile({
      desc: '用于展示用户信息',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        });
        wx.setStorageSync('userInfo', res.userInfo);
        this.updateUserData();
      },
      fail: (err) => {
        console.error(err);
        wx.showToast({
          title: '请授权登录',
          icon: 'none'
        });
      }
    });
  },

  updateUserData() {
    // 获取本地存储的用户信息和数据
    const userInfo = wx.getStorageSync('userInfo');
    const totalScore = wx.getStorageSync('totalScore') || 0;
    const quizCount = wx.getStorageSync('quizCount') || 0;
    
    // 模拟排名（基于分数的简单计算，实际应从后端获取）
    const rank = totalScore > 0 ? Math.floor(10000 / (totalScore + 1)) : '-';

    // 计算等级和勋章（简单逻辑）
    const level = Math.floor(totalScore / 500) + 1;
    const badges = this.data.badges.map(badge => {
      if (badge.id === 2 && quizCount >= 5) badge.unlocked = true;
      if (badge.id === 3 && totalScore >= 500) badge.unlocked = true;
      return badge;
    });

    if (userInfo) {
      this.setData({
        userInfo: userInfo,
        level,
        badges,
        userData: {
          totalScore,
          quizCount,
          rank
        }
      });
    }
  },

  checkCheckInStatus() {
    const lastCheckInDate = wx.getStorageSync('lastCheckInDate');
    const today = new Date().toLocaleDateString();
    if (lastCheckInDate === today) {
      this.setData({ hasCheckedIn: true });
    } else {
      this.setData({ hasCheckedIn: false });
    }
  },

  doCheckIn() {
    if (!this.data.userInfo) {
      wx.showToast({ title: '请先登录', icon: 'none' });
      return;
    }
    if (this.data.hasCheckedIn) return;

    // 签到逻辑
    const today = new Date().toLocaleDateString();
    wx.setStorageSync('lastCheckInDate', today);
    
    // 增加积分
    const points = 10;
    const currentTotalScore = wx.getStorageSync('totalScore') || 0;
    wx.setStorageSync('totalScore', currentTotalScore + points);

    this.setData({ hasCheckedIn: true });
    this.updateUserData();

    wx.showToast({
      title: '签到成功 +10分',
      icon: 'success'
    });
  },

  navigateToRank() {
    wx.switchTab({
      url: '/pages/rank/index'
    });
  },

  navigateToHistory() {
    wx.navigateTo({
      url: '/pages/history/index'
    });
  }
});
