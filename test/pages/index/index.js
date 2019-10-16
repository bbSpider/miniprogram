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
      if(that.data.tab==0){
      that.setData({
       tab: 1
      })
    //双击弹窗消失
    }else if(that.data.tab==1){
      that.setData({
        tab: 0
      })
    }
  }
})
