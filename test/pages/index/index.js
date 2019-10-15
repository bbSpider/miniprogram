//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tab: 0
  },
  //点击出现弹窗
  click: function() {
    let that = this;
    that.setData({
      tab: 1
    });
  }
})