// pages/mind/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      uid: '',
      realName:'',
      mobile:'',
      idCard:'',
      location: '',
      bank: '',
      bankId: '',
      bankName: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
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
  getUserInfo() {
    
    wx.request({
      url: 'http://localhost:3000/userInfo',
      success:res=>{
        var result = res.data.results[0];
        this.setData({
            uid: result.id,
            realName:result.realName,
            mobile:result.mobile,
            idCard:result.idCard,
            location: result.location,
            bank: result.bank,
            bankId: result.bankid,
            bankName: result.bankName
        })
        console.log(res)
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  alterUserInfo() {
    var that = this;
    wx.request({
      data: {
        uid: that.data.uid,
        realName: that.data.realName,
        mobile: that.data.mobile,
        idCard: that.data.idCard,
        location: that.data.location,
        bank: that.data.bank,
        bankId: that.data.bankId,
        bankName: that.data.bankName
      },
      method: 'POST',
      url: 'http://localhost:3000/alterUserInfo',
      success:res=>{
        console.log(res)
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  logout() {
    wx.removeStorage({
      key: 'token',
      success:res=>{
        wx.reLaunch({
          url: '../../login/login',
        })
      }
    })
  },


  listenRealName(e) {
    this.setData({
        realName: e.detail.value
    })
  },
  listenMobile(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  listenIdCard(e) {
    this.setData({
      idCard: e.detail.value
    })
  },
  listenLocation(e) {
    this.setData({
      location: e.detail.value
    })
  },
  listenBank(e) {
    this.setData({
      bank: e.detail.value
    })
  },
  listenBankId(e) {
    this.setData({
      bankId: e.detail.value
    })
  },
  listenBankName(e) {
    this.setData({
      bankName: e.detail.value
    })
  }
})