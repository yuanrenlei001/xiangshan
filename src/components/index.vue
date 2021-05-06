<template>
  <div class="main">
      <div class="indexLeft">
          <div class="indexLeftTop">
              <img src="@/assets/index/ryzs.png" alt="">
          </div>
          <div class="indexLeftMain01">
              <div class="swiper-container">
                  <div class="swiper-wrapper" ref="mySwiper">
                      <div class="swiper-slide"><img src="@/assets/index/ry01.png" alt=""></div>
                      <div class="swiper-slide"><img src="@/assets/index/ry01.png" alt=""></div>
                      <div class="swiper-slide"><img src="@/assets/index/ry01.png" alt=""></div>
                  </div>
              </div>
          </div>
          <div class="indexLeftTop" style="margin-top: 30px;">
              <img src="@/assets/index/nmfy.png" alt="">
          </div>
          <div class="indexLeftTitle">低收入农户</div>
          <div class="indexLeftMain02">
              <div>
                  <div class="indexLeftMain02Img"><img src="@/assets/index/iconBg01.png" alt=""></div>
                  <div class="indexLeftMain02Text" style="color: #ffd65b;">8081 <span>户</span></div>
                  <div class="indexLeftMain02Text2">户数</div>
                  <div class="indexLeftMain02Text3" style="opacity: 0;"><img src="@/assets/index/iconJt.png" alt=""> 15.4%</div>
              </div>
              <div>
                  <div class="indexLeftMain02Img"><img src="@/assets/index/iconBg02.png" alt=""></div>
                  <div class="indexLeftMain02Text">14954 <span>个</span></div>
                  <div class="indexLeftMain02Text2">人数</div>
                  <div class="indexLeftMain02Text3"><img src="@/assets/index/iconJt.png" alt=""> 15.4%</div>
              </div>
              <div>
                  <div class="indexLeftMain02Img"><img src="@/assets/index/iconBg03.png" alt=""></div>
                  <div class="indexLeftMain02Text">15954 <span>元</span></div>
                  <div class="indexLeftMain02Text2">人均收入</div>
                  <div class="indexLeftMain02Text3"><img src="@/assets/index/iconJt.png" alt=""> 15.4%</div>
              </div>
          </div>
          <div class="indexLeftTitle" style="margin-top: 25px;">人均可支配收入</div>
          <div class="indexLeftMain03">
              <div class="indexLeftMain03Left" style="padding-top: 25px;"><img src="@/assets/index/iconBg04.png" alt=""></div>
              <div class="indexLeftMain03Right" style="padding-top: 35px;">
                  <div><div>2018</div> <div>30882 <span>元</span></div>  <div class="indexLeftMain02Text3"><img src="@/assets/index/iconJt.png" alt=""> 15.4%</div></div>
                  <div><div>2018</div> <div>30882 <span>元</span></div>  <div class="indexLeftMain02Text3"><img src="@/assets/index/iconJt.png" alt=""> 15.4%</div></div>
                  <div><div>2018</div> <div>30882 <span>元</span></div>  <div class="indexLeftMain02Text3"><img src="@/assets/index/iconJt.png" alt=""> 15.4%</div></div>
              </div>
          </div>
          <div class="indexLeftTitle">城乡收入比</div>
          <div class="indexLeftMain04">
              <div style="position: relative;"><span>城市 </span><el-progress :percentage="70" color="#3871ee" :stroke-width="13"></el-progress><span> 城乡收入比</span></div>
              <div style="position: relative;"><span>乡村 </span><el-progress :percentage="30" color="#3871ee" :stroke-width="13"></el-progress><span style="color: #fff;"> 3:1</span></div>
          </div>
      </div>
      <div class="indexMain">

    </div>
      <div class="indexRight">
          <div class="indexLeftTop">
              <img src="@/assets/index/ncfz.png" alt="">
          </div>
          <div class="indexLeftTitle">农村经济</div>
          <div class="indexRight01">
              <el-row :gutter="12">
                  <el-col :span="12">
                      <el-col :span="9"><img src="@/assets/index/iconBg05.png" alt=""></el-col>
                      <el-col :span="15">
                          <div class="indexRight01text">
                          <div class="indexRight01text01">经营性和其他收入比</div>
                          <div class="indexRight01text02">3 : 1</div>
                          <div class="indexRight01text04" style="opacity: 0;">402<span>个</span></div>
                          </div>
                      </el-col>
                  </el-col>
                  <el-col :span="12">
                      <el-col :span="9"><img src="@/assets/index/iconBg06.png" alt=""></el-col>
                      <el-col :span="15">
                          <div class="indexRight01text">
                              <div class="indexRight01text01">村集体经济收入</div>
                              <div class="indexRight01text03">71121.21 <span>万元</span></div>
                              <div class="indexRight01text04">402<span>个</span></div>
                          </div>
                      </el-col>
                  </el-col>
                  <el-col :span="24" style="color: #fff;">
                      <el-col :span="10"><div id="mains" style="width: 100%;height: 200px;margin-top: 10px;" ref="main"></div></el-col>
                      <el-col :span="13" style="position: relative;top:45px;">
                        <div class="ncIcon ncIcon01"><span>一产业</span><span>14.5%</span></div>
                        <div class="ncIcon ncIcon02"><span>二产业</span><span>41.7%</span></div>
                        <div class="ncIcon ncIcon03"><span>三产业</span><span>43.8%</span></div>
                      </el-col>
                  </el-col>
              </el-row>
          </div>
        <div class="indexLeftTitle">美丽乡村</div>
        <div class="indexRight02">
          <div style="height:90px;">
            <div class="indexRight02Left"  style="line-height: 90px;"><span><img src="@/assets/index/xc01.png" alt=""></span> <span>省级新时代美丽乡村</span> <span><img src="@/assets/index/xcicon02.png" alt=""></span></div>
            <div class="indexRight02Right">
              <div><span>精品村</span> <span>41 <i>个</i></span></div>
              <div><span>达标村</span> <span>123 <i>个</i></span></div>
            </div>
          </div>
          <div style="height:140px;">
            <div class="indexRight02Left"  style="line-height: 140px;"><span><img src="@/assets/index/xc02.png" alt=""></span> <span>市美丽乡村</span> <span><img src="@/assets/index/xcicon02.png" alt=""></span></div>
            <div class="indexRight02Right">
              <div><span>示范镇</span> <span>6 <i>个</i></span> <span>+1</span></div>
              <div><span>示范村</span> <span>20 <i>个</i></span> <span>+4</span></div>
              <div><span>合格村</span> <span>207 <i>个</i></span></div>
              <div><span>风景线</span> <span>2 <i>条</i></span></div>
            </div>
          </div>
          <div style="height:60px;">
            <div class="indexRight02Left"  style="line-height: 60px;"><span><img src="@/assets/index/xc03.png" alt=""></span> <span>县级特色村</span> <span><img src="@/assets/index/xcicon02.png" alt=""></span></div>
            <div class="indexRight02Right">
              <div><span></span> <span>52 <i>个</i></span> <span>+10</span></div>
            </div>
          </div>
          <div style="height:60px;">
            <div class="indexRight02Left"  style="line-height: 60px;"><span><img src="@/assets/index/xc04.png" alt=""></span> <span>省级森林城镇</span> <span><img src="@/assets/index/xcicon02.png" alt=""></span></div>
            <div class="indexRight02Right">
              <div><span></span> <span>11 <i>个</i></span> <span>+1</span></div>
            </div>
          </div>
          <div style="height:140px;">
            <div class="indexRight02Left"  style="line-height: 140px;"><span><img src="@/assets/index/xc05.png" alt=""></span> <span>人居环境</span> <span><img src="@/assets/index/xcicon02.png" alt=""></span></div>
            <div class="indexRight02Right">
              <div><span>农村卫生厕所数量</span> <span>214 <i>个</i></span></div>
              <div><span>文化礼堂数量</span> <span>65 <i>个</i></span></div>
              <div><span>污水处理率</span> <span>100 <i>%</i></span></div>
              <div><span>垃圾分类覆盖率</span> <span>100 <i>%</i></span></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    import Swiper from 'swiper';
    import echarts from "echarts";
export default {
  name: 'HelloWorld',
  data () {
    return {
        mtswiper : ''
    }
  },
    created:function (){

    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        },
    },
    methods:{
        drawLines1(data){
            let myChart = echarts.init(this.$refs.main);
            let option = {
                    title:[
                        {
                            text: 'GDP',
                            textStyle: {
                                color: '#17e6ff',
                                fontSize: 16
                            },
                            itemGap: 20,
                            left: 'center',
                            top: '35%'
                        },
                        {
                            text: '各产业',
                            textStyle: {
                                color: '#17e6ff',
                                fontSize: 16
                            },
                            itemGap: 20,
                            left: 'center',
                            top: '45%'
                        },
                        {
                            text: '比重',
                            textStyle: {
                                color: '#17e6ff',
                                fontSize: 16
                            },
                            itemGap: 20,
                            left: 'center',
                            top: '55%'
                        }
                    ],
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)',
                    },
                    legend: {
                        orient: 'vertical',
                        left: 10,
                        data: ['直接访问'],
                    },
                    series: [
                        {
                            name: '',
                            itemStyle: {
                                borderRadius: 20,
                                borderColor: '#000',
                                borderWidth: 1,
                            },
                            type: 'pie',
                            clockWise: false,
                            radius: ['50%', '60%'],
                            center: ['50%', '50%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: true,
                                position: 'center',
                                color: '#ccc',
                            },
                            labelLine: {
                                show: false,
                            },
                            data: [
                                {
                                    value: 14,
                                    name: '',
                                    itemStyle: {
                                        normal: {
                                            color: '#ffcf69',
                                        },
                                    },
                                },
                                {
                                    value: 42,
                                    name: '',
                                    itemStyle: {
                                        normal: {
                                            color: '#4776fb',
                                        },
                                    },
                                },
                                {
                                    value: 44,
                                    itemStyle: {
                                        normal: {
                                            color: '#30c2ff',
                                        },
                                    },
                                },
                            ],
                        },
                        {
                            name: '',
                            itemStyle: {
                                borderRadius: 40,
                                borderColor: '#000',
                                borderWidth: 1,
                            },
                            type: 'pie',
                            clockWise: false,
                            radius: ['70%', '80%'],
                            center: ['50%', '50%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: true,
                                position: 'center',
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '30',
                                    fontWeight: 'bold',
                                },
                            },
                            labelLine: {
                                show: false,
                            },
                            data: [
                                {
                                    value: 14,
                                    name: '',
                                    itemStyle: {
                                        normal: {
                                            color: '#ffcf69',
                                        },
                                    },
                                },
                                {
                                    value: 42,
                                    name: '',
                                    itemStyle: {
                                        normal: {
                                            color: '#4776fb',
                                        },
                                    },
                                },
                                {
                                    value: 44,
                                    itemStyle: {
                                        normal: {
                                            color: '#30c2ff',
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                };

            myChart.setOption(option);
        }
    },
    mounted(){
        const mtswiper = new Swiper ('.swiper-container', {
            loop: true,
            autoplay:3000,
            slidesPerView :2,
            spaceBetween: 30
        });
        this.drawLines1();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .swiper-container {width:90%;position: relative;height:100%;line-height: 231px;}
    .swiper-container img {width: 175px;height:123px;vertical-align: middle;}
    .main {width: 100%;height:calc(100vh - 155px);display: flex;}
    .indexLeft  {flex-grow: 1;width: 24%;}
    .indexRight  {flex-grow: 1;width: 24%;}
    .indexMain {flex-grow: 2;position: relative;width: 52%;}
    .indexLeftTop {text-align: center;}
    .indexMain:before {
        content: '';
        width:93px;height:100%;position: absolute;top:0;left:0;
        background-image: url("../assets/index/indexLeft.png");
        background-repeat: no-repeat;
        background-size: 93px 100%;
    }
    .indexMain:after {
        content: '';
        width:93px;height:100%;position: absolute;top:0;right:0;
        background-image: url("../assets/index/indexRight.png");
        background-repeat: no-repeat;
        background-size: 93px 100%;
    }
    .indexLeftMain01 {
        width:85%;height:231px;
        background-image: url("../assets/index/ry.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin: 20px auto 0;
    }
    .indexLeftTitle {
        width:calc(100% - 45px);height:31px;
        background-image: url("../assets/index/title.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin: auto;
        color: #fff;
        font-size: 20px;
        line-height: 31px;
        padding-left: 45px;
    }
    .indexLeftMain02 {width: 90%;position: relative;margin: auto;}
    .indexLeftMain02>div {display: inline-block;width: 32%;text-align: center;}
    .indexLeftMain02Img {
        width: 100%;
        position: relative;
        padding-top: 35px;
    }
    .indexLeftMain02Img img {
        -webkit-animation: bounce-down 1.6s linear infinite;
        animation: bounce-down 1.6s linear infinite;
    }

    @-webkit-keyframes bounce-down {
        25% {
            -webkit-transform: translateY(-4px);
        }
        50%, 100% {
            -webkit-transform: translateY(0);
        }
        75% {
            -webkit-transform: translateY(4px);
        }
    }

    @keyframes bounce-down {
        25% {
            transform: translateY(-4px);
        }
        50%, 100% {
            transform: translateY(0);
        }
        75% {
            transform: translateY(4px);
        }
    }
    .indexLeftMain02Img:before {
        content: '';
        width:60px;height:55px;position: absolute;top:30px;
        left:50%;margin-left: -30px;
        background-image: url("../assets/index/iconBg.png");
        background-repeat: no-repeat;
        background-size: 60px 55px;
    }
    .indexLeftMain02Text {font-size: 20px;text-align: center;width: 100%;margin-top: 25px;color: #fff;}
    .indexLeftMain02Text span {font-size: 12px;}
    .indexLeftMain02Text2 {font-size: 14px;color: #8b9cdd;}
    .indexLeftMain02Text3 {font-size: 14px;color: #3baeff;position: relative;}
    .indexLeftMain02Text3 img {width: 14px;height:10px;vertical-align: sub;}
    .indexLeftMain03 {padding: 0 45px;}
    .indexLeftMain03Left {width: 133px;height:140px;float:left;}
    .indexLeftMain03Right {margin-left: 155px;width: calc(100% - 155px);overflow: hidden;}
    .indexLeftMain03Right>div {position: relative;height:25px;line-height: 25px;margin-bottom: 25px;}
    .indexLeftMain03Right>div:before {
        content: '';
        width:244px;height:2px;position: absolute;bottom:0;left:0;
        background-image: url("../assets/index/bottom.png");
        background-repeat: no-repeat;
        background-size:100% 2px;
    }
    .indexLeftMain03Right>div div {float:left;}
    .indexLeftMain03Right>div div:nth-child(1) {color: #8b9cdd;font-size: 16px;margin-right: 20px;}
    .indexLeftMain03Right>div div:nth-child(2) {color: #ffbf42;font-size: 22px;}
    .indexLeftMain03Right>div div:nth-child(2) span {color: #fff;font-size: 12px;}
    .indexLeftMain03Right>div div:nth-child(3) {color: #8b9cdd;font-size: 14px;float:right;}
    .indexLeftMain04 {padding: 0 45px;color: #8b9cdd;font-size: 12px;position: relative;margin-top: 25px;}
    .indexLeftMain04 div {line-height: 35px;}
    .indexLeftMain04>>>.el-progress--line {width: 80%;margin: auto;}
    .indexLeftMain04>>>.el-progress__text {display: none;}
    .indexLeftMain04 span:first-child {position: absolute;left:0;}
    .indexLeftMain04 span:last-child {position: absolute;right:0;top:0;}
    .indexLeftMain04>>>.el-progress-bar__outer {background-color: rgba(255,255,255,.2);}
    .indexRight01 {background: rgba(0,0,0,.3);width: 90%;padding-left: 5%;padding-top: 25px;margin-left: 5%;}
    .indexRight01 img {width: 100%;height:100%;}
    .indexRight01text01 {font-size: 14px;color: #8b9cdd;}
    .indexRight01text02 {font-size: 26px;color: #fff;}
    .indexRight01text03 {font-size: 20px;color: #fff;}
    .indexRight01text04 {font-size: 18px;color: #26bfff;}
    .indexRight01text03 span {font-size: 12px;color: #8b9cdd;}
    .indexRight01text04 span {font-size: 12px;color: #26bfff;}
    .ncIcon {width: 100%;position: relative;line-height: 25px;margin-bottom: 20px;}
    .ncIcon01:before{
      content: '';
      width:100%;height:21px;position: absolute;bottom:-5px;left:0;
      background-image: url("../assets/index/diyi.png");
      background-repeat: no-repeat;
      background-size:100% 21px;
    }
    .ncIcon02:before{
      content: '';
      width:100%;height:21px;position: absolute;bottom:-5px;left:0;
      background-image: url("../assets/index/dier.png");
      background-repeat: no-repeat;
      background-size:100% 21px;
    }
    .ncIcon03:before{
      content: '';
      width:100%;height:21px;position: absolute;bottom:-5px;left:0;
      background-image: url("../assets/index/disan.png");
      background-repeat: no-repeat;
      background-size:100% 21px;
    }
    .ncIcon span:first-child {margin-left: 26px;font-size: 16px;color: #8b9cdd;}
    .ncIcon span:last-child {font-size: 24px;float:right;color: #fff;}
    .indexRight02 {background: rgba(0,0,0,.3);width: 90%;padding-left: 5%;margin-left: 5%;}
    .indexRight02 i {font-style: normal;}
    .indexRight02>div {padding:0 20px;position: relative;}
    .indexRight02>div:before{
      content: '';
      width:100%;height:18px;position: absolute;bottom:0;left:0;
      background-image: url("../assets/index/xcicon03.png");
      background-repeat: no-repeat;
      background-size:100% 18px;
    }
    .indexRight02Left {float:left;margin-left: -15px;height: 100%;}
    .indexRight02Left span {display: inline-block;color: #3baeff;font-size: 16px;}
    .indexRight02Left span:nth-child(1) {width:48px;height:100%;}
    .indexRight02Left span:nth-child(1) img  {vertical-align: middle;}
    .indexRight02Left span:nth-child(3) {width:113px;height:100%;}
    .indexRight02Left span:nth-child(3) img {vertical-align: middle;}
    .indexRight02Right {position: absolute;top:20px;right:24px;}
    .indexRight02Right>div {position: relative;line-height: 25px;}
    .indexRight02Right>div:before{
      content: '';
      width:9px;height:9px;position: absolute;top:50%;left:-15px;
      background-image: url("../assets/index/xcicon01.png");
      background-repeat: no-repeat;
      background-size:9px 9px;
    }
    .indexRight02Right span:nth-child(1) {font-size: 14px;color: #8b9cdd;}
    .indexRight02Right span:nth-child(2) {font-size: 20px;color: #fff;margin: 0 15px;}
    .indexRight02Right span:nth-child(2) i {font-size: 12px;}
    .indexRight02Right span:nth-child(3) {font-size: 14px;color: #ff5757;}
</style>
