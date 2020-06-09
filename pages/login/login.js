// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  listenMobile(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  listenPwd(e) {
    this.setData({
      password: e.detail.value
    })
  },
  loginBtn() {
    var that = this;
    wx.request({
      data: {
        mobile: that.data.mobile,
        password: that.data.password
      },
      method: 'POST',
      url: 'http://localhost:3000/login',
      success: res => {
        if (res.data.meta.status === 400) {
          console.log('登陆失败!')
          wx.showToast({
            title: '登陆失败!',
            icon: 'none',
            duration: 1000
          })
          return
        }
        app.globalData.userInfo = res.data.results[0];
        wx.setStorage({
          data: res.data.token,
          key: 'token',
        })
        wx.showToast({
          title: '登陆成功',
          icon: 'success',
          duration: 1500
        })
        setTimeout(() => {
          wx.switchTab({
            url: '../mind/mind',
          })
        }, 1600)

      },
      fail: err => {
        console.log(err)
      }
    })
  }
})