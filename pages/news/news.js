const app = getApp()
Page({
  data: {
    msg: 'hellow',
    list: []
  },
  onLoad() {
    this.showList();
  },
  showList:function() {
    wx.request({
      url: 'http://localhost:3000/newsList',
      success:res=>{
        var newArr = [];
        res.data.results.forEach((item,index)=>{
          newArr.push(item)
        })
        this.setData({
          list: newArr
        })
        console.log(res)
      },
      fail:err=>{
        console.log(err)
      }
    })
  }
})