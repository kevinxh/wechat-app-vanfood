const app = getApp()

Page({
  data: {
    favourite:[{
      name: "麦当劳",
      rating: 4,
      cuisine: "快餐",
      avgPrice: 10,
      distance: 2.8,
      traffic: 12,
      area: "Burnaby",
      startHour: "11",
      closeHour: "10"
    }, {
      name: "麦当劳",
      rating: 3,
      cuisine: "快餐",
      avgPrice: 10,
      distance: 2.8,
      traffic: 12,
      area: "Burnaby",
      startHour: "11",
      closeHour: "10"
    }],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onSearch: ({detail: {value}}) => {
    console.log(value)
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
