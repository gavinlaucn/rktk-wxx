const app = app || getApp();
const zutils = require('../../utils/zutils.js');

Page({
  data: {
  },

  onLoad: function (e) {
    this.setData({
      msg: e.msg || '非法请求参数'
    });
  },

  goHome: function(){
    wx.switchTab({
      url: 'index'
    });
  },

  onShareAppMessage: function () {
    return app.shareData();
  }
})