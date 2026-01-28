const { questions } = require('../../data/questions.js');

Page({
  data: {
    questions: [],
    currentQuestion: {},
    currentQuestionIndex: 0,
    totalQuestions: 0,
    currentSelected: '',
    userAnswers: [],
    timeLeft: 30, // 每题30秒
    timer: null
  },

  onLoad() {
    this.setData({
      questions: questions,
      currentQuestion: questions[0],
      totalQuestions: questions.length,
      currentQuestionIndex: 0,
      userAnswers: [],
      currentSelected: ''
    });
    this.startTimer();
  },

  onUnload() {
    this.stopTimer();
  },

  startTimer() {
    this.stopTimer();
    this.setData({ timeLeft: 30 });
    this.data.timer = setInterval(() => {
      if (this.data.timeLeft > 0) {
        this.setData({
          timeLeft: this.data.timeLeft - 1
        });
      } else {
        // 时间到，自动下一题或提交
        // 如果未选择，算错，标记为null
        if (!this.data.currentSelected) {
           this.handleTimeOut();
        }
      }
    }, 1000);
  },

  stopTimer() {
    if (this.data.timer) {
      clearInterval(this.data.timer);
      this.data.timer = null;
    }
  },

  handleTimeOut() {
    // 超时处理：记录为空答案，自动跳下一题
    const answer = {
      questionId: this.data.currentQuestion.id,
      userAnswer: null,
      isCorrect: false
    };
    this.processAnswer(answer);
  },

  selectOption(e) {
    const label = e.currentTarget.dataset.label;
    this.setData({
      currentSelected: label
    });
  },

  nextQuestion() {
    if (!this.data.currentSelected) return;

    const answer = {
      questionId: this.data.currentQuestion.id,
      userAnswer: this.data.currentSelected,
      isCorrect: this.data.currentSelected === this.data.currentQuestion.answer
    };

    this.processAnswer(answer);
  },

  processAnswer(answer) {
    this.stopTimer(); // 停止当前计时

    const userAnswers = [...this.data.userAnswers, answer];

    if (this.data.currentQuestionIndex < this.data.totalQuestions - 1) {
      // 下一题
      const nextIndex = this.data.currentQuestionIndex + 1;
      this.setData({
        userAnswers,
        currentQuestionIndex: nextIndex,
        currentQuestion: this.data.questions[nextIndex],
        currentSelected: ''
      });
      this.startTimer(); // 重新开始计时
    } else {
      // 提交
      this.finishQuiz(userAnswers);
    }
  },

  finishQuiz(userAnswers) {
    this.setData({ userAnswers });
      
    // 计算分数
    let correctCount = 0;
    userAnswers.forEach(ans => {
      if (ans.isCorrect) correctCount++;
    });
    const score = Math.round((correctCount / this.data.totalQuestions) * 100);

    // 将结果存入缓存
    wx.setStorageSync('quizResult', {
      score,
      total: this.data.totalQuestions,
      correctCount,
      userAnswers,
      questions: this.data.questions
    });

    // 累加总积分
    const currentTotalScore = wx.getStorageSync('totalScore') || 0;
    wx.setStorageSync('totalScore', currentTotalScore + score);
    
    // 增加答题次数
    const currentQuizCount = wx.getStorageSync('quizCount') || 0;
    wx.setStorageSync('quizCount', currentQuizCount + 1);

    // 记录到历史记录
    const historyList = wx.getStorageSync('historyList') || [];
    const now = new Date();
    const dateStr = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
    historyList.push({
      date: dateStr,
      score,
      correctCount,
      total: this.data.totalQuestions
    });
    // 只保留最近20条
    if (historyList.length > 20) {
      historyList.shift();
    }
    wx.setStorageSync('historyList', historyList);

    wx.redirectTo({
      url: '/pages/result/index'
    });
  }
});
