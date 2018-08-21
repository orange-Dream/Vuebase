apiready = function() {
    var Vconsole = new VConsole()

    // console.log(api.pageParam.footerH);
    new Vue({
        el: "#home",
        data: {
            swiper: ["../../image/footer/banner.jpg", "../../image/footer/banner1.jpg", "../../image/footer/banner2.jpg"],
            fenlei: [{
                name: "分享赚",
                img: "../../image/home/share.png"
            }, {
                name: "旅游赚",
                img: "../../image/home/tourism.png"
            }, {
                name: "购物赚",
                img: "../../image/home/shopping.png"
            }, {
                name: "同城赚",
                img: "../../image/home/city.png"
            }, ],
            ajax1: []

        },
        mounted() {
            // this.ajaxdemo()
            // this.gettotalSpacedemo()
            // this.getFreeDiskSpacedemo()
            // this.nodificatiopndemo()
            // this.locationdemo()
            // this.toastdemo()
            // this.getpivturedemo()
        },
        methods: {
          getpivturedemo(){
            api.getPicture({
                sourceType: 'camera',
                encodingType: 'jpg',
                mediaValue: 'pic',
                destinationType: 'url',
                allowEdit: true,
                quality: 50,
                targetWidth: 100,
                targetHeight: 100,
                saveToPhotoAlbum: false
            }, function(ret, err){
                if(ret){
                     alert(JSON.stringify(ret));
                }else{
                     alert(JSON.stringify(err));
                }
            });

          },

          toastdemo(){
          //   api.toast({
          //     msg:"加载",
          //     duration:2000,
          //     location:"top"
          //   })
          //   api.toast({
          //     msg: '网络错误',
          //     duration: 2000,
          //     location: 'bottom'
          // });
          // api.showFloatBox:durati
          },
          showProgredddemo(){
            api.showProgress({
              // style:""
              animationType:"fade",
              title:"加载中",
              text:"先喝杯茶……",

            })
          },
          promprdemo(){
            api.prompt({
              title:"文章标题",
              msg:"文字内容",
              text:"abxh",
                buttons: ['确定1', '取消1',"删除"]
              // bottons:["like","but","shai","删除"]
            })
          },
          actionsheetdemo(){
            api.actionSheet({
              title:"文章标题",
              cancelTitle:"贝多芬",
              destructiveTitle: '红色警告按钮',
             buttons: ['1', '2', '3']
            })
          },
          confirmdemo(){
              api.confirm({
                  title: 'testtitle',
                  msg: 'testmsg_demojiohjij',
                  buttons: ['确定', '取消',"删除"]
              }, function(ret, err){
                  if( ret ){
                       alert( JSON.stringify( ret ) );
                  }else{
                       alert( JSON.stringify( err ) );
                  }
              });

          },
          maildemo(){
            api.mail({
              recipients:["xiemei1996@163.com"],
              subject:"邪魅谢米娥",
              body:"无问东"
          },function(ret,err){
            if(ret && ret.status){
              api.alert({
                  msg:"发送成功"
              })
            }else {
              api.alert({
                  msg:"发送失败"
              })
            }
          })
          },
          calldemo(){
              api.call({
                type:"tel_prompt",
                number:"15173127324"
              })
          },
          smsdemo(){
            api.sms({
              numbers:["15173127324"],
              text:"注意安全,到了跟我说声——xm"
            },function(ret,err){
              if(ret && ret.status){
                api.alert({
                    msg:"发送成功"
                })
              }else {
                api.alert({
                    msg:"发送失败"
                })
              }
            })
          },
          locationdemo()
          {
            api.startLocation({
              accuracy:'10m',
              filter:2,
              autoStop:true,//获取到位置后是否自动停止定位
            },function(ret,error){
              api.alert({
                  msg: JSON.stringify(ret)
              })
              if(ret){
                api.alert({
                    msg: JSON.stringify(ret)
                })
              }else{
                api.alert({
                    msg: JSON.stringify(error)
                })
              }
            })
          },
        cancelnodificatiopndemo(){
          api.cancelNotification({
              id: -1
          });
        },

            nodificatiopndemo() {
                api.notification({
                    vibrate:[100, 500, 100, 500],
                    light:true,
                    notify: {
                        title: '通知标题',
                        content: '通知内容'
                    }

                    },
                    function(ret, error) {


                })
            },
            gettotalSpacedemo() {
                var Spacedemo = api.getTotalSpace({
                    sync: true
                })
                console.log(Spacedemo);
            },
            getFreeDiskSpacedemo() {
                api.getFreeDiskSpace({}, function(rett, error) {
                    var cc = rett.size
                    console.log(cc);
                })
            },
            ajaxdemo() {
                var this_ = this
                api.ajax({
                    url: "http://app.zhuanzke.com/api/v1/article/category",
                    methods: "get",
                    encode: true, //是否对url进行编码
                    cache: true, //是否缓存，若缓存，下次没网络时请求则会使用缓存，仅在get请求有效
                    timeout: 30, //超时时间
                    // datatype:json,//返回的数据类型

                }, function(ret, err) {
                    console.log(ret);
                    this_.ajax1 = ret.resource
                    console.log(this_.ajax1);
                    if (ret) {
                        // api.alert({msg:JSON.stringify(ret)})
                    } else {
                        api.alert({
                            msg: JSON.stringify(err)
                        })
                    }
                })
            }
        }
    })
    var slide3 = new auiSlide({
        container: document.getElementById("aui-slide3"),
        // "width":,
        "height": '150',
        "speed": 500,
        "autoPlay": 3000, //自动播放
        "loop": true,
        "pageShow": true,
        // "pageStyle":'line',
        // 'dotPosition': 'center'
    })
}
