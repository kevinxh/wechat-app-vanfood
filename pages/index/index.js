const app = getApp()

const samples = [{
  name: "Gyu-kaku 牛角",
  img: "https://pic.pimg.tw/loveeatmiss520/1409150470-3153101501_n.jpg?v=1409150782",
  rating: 5,
  cuisine: "日餐",
  avgPrice: 40,
  distance: 10.6,
  traffic: 38,
  area: "Vancouver",
  startHour: "11",
  closeHour: "10"
}, {
  name: "麦当劳",
  img: "https://typeset-beta.imgix.net/uploads/image/2017/6/16/0c06c140-a2eb-41d1-9a19-e63fb069ab2b-signature-line.jpg",
  rating: 3,
  cuisine: "快餐",
  avgPrice: 10,
  distance: 2.8,
  traffic: 12,
  area: "Burnaby",
  startHour: "11",
  closeHour: "10"
}, {
  name: "品一品",
  img: "https://tva4.sinaimg.cn/crop.0.0.640.640.180/d1b9badcjw8eqnycmhpqcj20hs0hs3z7.jpg",
  rating: 4,
  cuisine: "香锅",
  avgPrice: 20,
  distance: 7.8,
  traffic: 26,
  area: "Burnaby",
  startHour: "11",
  closeHour: "10"
}]

Page({
  data: {
    favourite: samples,
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
