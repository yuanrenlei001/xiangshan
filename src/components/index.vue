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
                      <el-col :span="14">2</el-col>
                  </el-col>
              </el-row>
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
                    backgroundColor: '#071729',
                    title:[
                        {
                            text: 'GDP',
                            textStyle: {
                                color: '#17e6ff',
                                fontSize: 16
                            },
                            itemGap: 20,
                            left: 'center',
                            top: '42%'
                        },
                        {
                            text: '各产业',
                            textStyle: {
                                color: '#17e6ff',
                                fontSize: 16
                            },
                            itemGap: 20,
                            left: 'center',
                            top: '47%'
                        },
                        {
                            text: '比重',
                            textStyle: {
                                color: '#17e6ff',
                                fontSize: 16
                            },
                            itemGap: 20,
                            left: 'center',
                            top: '52%'
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
    .indexRight01 {background: rgba(0,0,0,.3);width: 90%;margin-left: 10%;padding-top: 25px;}
    .indexRight01 img {width: 100%;height:100%;}
    .indexRight01text01 {font-size: 14px;color: #8b9cdd;}
    .indexRight01text02 {font-size: 26px;color: #fff;}
    .indexRight01text03 {font-size: 20px;color: #fff;}
    .indexRight01text04 {font-size: 18px;color: #26bfff;}
    .indexRight01text03 span {font-size: 12px;color: #8b9cdd;}
    .indexRight01text04 span {font-size: 12px;color: #26bfff;}

</style>
