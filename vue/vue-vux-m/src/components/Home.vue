<template>
  <div class="big-content">
    <!--    上面内容-->
    <div class="top">
      <img class="top-bg" src="../assets/images/home/top-bg.png">
      <div class="top-content">
        <!--          搜索-->
        <div class="search-box flex-around-center">
          <div class="flex-center input-box">
            <icon type="search" class="search-icon"></icon>
            <input type="text" v-model="searchVal" placeholder="请输入关键字">
          </div>
          <div class="search-btn" @click="search">
            搜索
          </div>
        </div>
        <!--          导航条-->
        <div class="tab-box">
          <tab :scroll-threshold="7" :class="{'scroll-tab-box':tablist.length>7}" custom-bar-width=".6rem"
               bar-active-color="#fff">
            <tab-item @on-item-click="onItemClick" v-for="(tab,index) in tablist" :key="tab.name" :selected="index===0">
              {{ tab.name }}
            </tab-item>
          </tab>
        </div>

      </div>
    </div>
    <!--      下面内容-->
    <div class="bottom-content">
      <!--   一元推荐-->
      <div class="row-1">
        <img class="img-bg" src="../assets/images/home/yi-yuan-bg.png">
        <div class="content-box">
          <!--    发起拼团弹出层-->
          <div class="msg-box flex-center">
            <img src="../assets/images/home/user-vertor.png">
            <span>张三</span>
            <span>刚刚发起了拼团 ＞</span>
          </div>
          <!--        商品牌列表-->
          <ul class="prodect-list">
            <li class="list-item" v-for="(product,index) in oneBuyList" :key="index">
              <div class="left-box flex-center">
                <img :src="product.url">
              </div>
              <div class="right-box">
                <div class="right-content">
                  <p class="title">{{product.title}}</p>
                  <div class="old-price">
                    产品原价：
                    <span>{{product.oldPrice}}</span>
                  </div>
                  <div class="start-time">
                    开团时间：
                    <span>{{product.startTime}}</span>
                  </div>
                  <div class="flex-around-center item-bottom">
                    <div class="now-price">
                      ￥<span>{{product.nowPrice}}</span>.0
                    </div>
                    <div class="to-buy flex-around-center">
                    <span>
                      {{product.buyNum}}人已购买
                    </span>
                      <span class="go">GO＞</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <!--      送菜上门-->
      <div class="row-2">
        <span class="allow-down"></span>
        <div class="content-title flex-around-center">
          <img src="../assets/images/home/soncai.png">
          <span @click="jump">查看更多＞</span>
        </div>
        <ul class="clear">
          <li class="left" v-for="(item,index) in soncaiList" :key="index">
            <div class="flex-center img-box">
              <img :src="item.url">
            </div>
            <p class="price">￥{{item.price}}</p>
          </li>
        </ul>
      </div>
      <!--      拼团团购-->
      <div class="row-3">
        <div class="content-title flex-center">
          <img src="../assets/images/home/pingtuan-title.png">
        </div>
        <ul class="prodect-list">
          <li class="list-item list-item-big" v-for="(product,index) in tuanBuyList" :key="index">
            <div class="left-box flex-center">
              <img :src="product.url">
            </div>
            <div class="right-box">
              <div class="right-content">
                <p class="title">{{product.title}}</p>
                <div class="tuan-person">
                  成团人数：
                  <span>{{product.tuanPerson}}</span>
                </div>
                <div class="curr-person">
                  当前参团人数：
                  <span>{{product.currPerson}}</span>
                </div>
                <div class="had-time">
                  剩余时间：
                  <span>{{product.hadTime}}</span>
                </div>
                <div class="flex-around-center item-bottom">
                  <div class="now-price">
                    <span class="money">￥{{product.price}}</span>
                    <span class="had-buy">已团购{{product.hadBuy}}件</span>
                  </div>
                  <span class="go-buy">立即抢购＞</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--      特别推荐-->
      <div class="row-4">
        <div class="content-title flex-around-center">
          <div>
            <span class="active">特别推荐</span>
            <span>精选商品</span>
            <span>优质首选</span>
          </div>
          <span @click="jump">查看更多＞</span>
        </div>
        <scroller lock-y :scrollbar-x=false :bounce="false">
          <div class="scroll-box" :style="{width:tuijianList.length*29.42+'vw'}">
            <div class="item left" v-for="(item,index) in tuijianList" :key="index">
              <div class="img-box flex-center">
                <img :src="item.url">
              </div>
              <div class="price-box">
                <span class="new-price">￥{{item.price}}</span>
                <span class="old-price">￥{{item.oldPrice}}</span>
              </div>
            </div>
          </div>
        </scroller>
      </div>
      <!--      底部列表-->
      <div class="row-5">
        <ul class="prodect-list">
          <li class="list-item list-item-big" v-for="(product,index) in bottomList" :key="index">
            <div class="left-box flex-center">
              <img :src="product.url">
            </div>
            <div class="right-box">
              <div class="right-content">
                <p class="title">{{product.title}}</p>
                <div class="tuan-person">
                  成团人数：
                  <span>{{product.tuanPerson}}</span>
                </div>
                <div class="curr-person">
                  当前参团人数：
                  <span>{{product.currPerson}}</span>
                </div>
                <div class="had-time">
                  剩余时间：
                  <span>{{product.hadTime}}</span>
                </div>
                <div class="flex-around-center item-bottom">
                  <div class="now-price">
                    <span class="money">￥{{product.price}}</span>
                    <span class="had-buy">已团购{{product.hadBuy}}件</span>
                  </div>
                  <span class="go-buy">立即抢购＞</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <tabbar style="position: fixed" class="tab-bar-box">
      <tabbar-item selected>
        <!--        需要更换图片-->
        <img slot="icon" src="../assets/images/home/bar／tab_home_pre@2x1.png">
        <img slot="icon-active" src="../assets/images/home/tab_home_active.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/images/home/tab_zhibo_unactive.png">
        <span slot="label">直播</span>
      </tabbar-item>
      <tabbar-item class="icon-middle">
        <img slot="icon" src="../assets/images/home/hongbao.png">
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/images/home/tab_message_unactive.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/images/home/tab_mine_unactive.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>

    <!--返回顶部-->
    <transition name="show" mode="out-in">
      <div class="go-top" v-show="showGoTop" @click="goTop">
        <img src="../assets/images/home/go-top.png">
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
    import {
        Tabbar, TabbarItem, Tab,
        Icon,
        TabItem,
        Scroller
    } from 'vux'

    export default {
        name: 'Home',
        components: {
            Tabbar,
            TabbarItem,
            Icon,
            Tab,
            TabItem,
            Scroller
        },
        data() {
            return {
                searchVal: "特价商品", // 搜索关键字
                tablist: [ // 导航列表
                    {name: "推荐"},
                    {name: "水果"},
                    {name: "食品"},
                    {name: "百货"},
                    {name: "服饰"},
                    {name: "医疗"},
                    {name: "生鲜"},
                    {name: "生鲜1"},
                    {name: "生鲜2"},
                ],
                oneBuyList: [ // 一元拼团列表
                    {
                        url: require("../assets/images/home/product-1.png"),
                        title: "澳门风味香酥鸡蛋卷饼干过年送礼年货礼盒装春礼年货礼盒装春",
                        oldPrice: 4999,
                        nowPrice: 1,
                        startTime: "21时39分08秒",
                        buyNum: 12,
                    },
                    {
                        url: require("../assets/images/home/product-2.png"),
                        title: "澳门风味香酥鸡蛋卷饼干过年送礼年货礼盒装春礼年货礼盒装春",
                        oldPrice: 4999,
                        nowPrice: 2,
                        startTime: "21时39分08秒",
                        buyNum: 12
                    },
                    {
                        url: require("../assets/images/home/product-1.png"),
                        title: "澳门风味香酥鸡蛋卷饼干过年送礼年货礼盒装春礼年货礼盒装春",
                        oldPrice: 4999,
                        nowPrice: 1,
                        startTime: "21时39分08秒",
                        buyNum: 12
                    },
                    {
                        url: require("../assets/images/home/product-2.png"),
                        title: "澳门风味香酥鸡蛋卷饼干过年送礼年货礼盒装春礼年货礼盒装春",
                        oldPrice: 4999,
                        nowPrice: 1,
                        startTime: "21时39分08秒",
                        buyNum: 12
                    }
                ],
                soncaiList: [ // 送菜列表
                    {url: require("../assets/images/home/soncai-1.png"), price: 2.99},
                    {url: require("../assets/images/home/soncai-2.png"), price: 3.99},
                    {url: require("../assets/images/home/soncai-1.png"), price: 2.99},
                    {url: require("../assets/images/home/soncai-2.png"), price: 1.99},
                    {url: require("../assets/images/home/soncai-1.png"), price: 2.99},
                    {url: require("../assets/images/home/soncai-2.png"), price: 3.99},
                    {url: require("../assets/images/home/soncai-1.png"), price: 2.99},
                    {url: require("../assets/images/home/soncai-2.png"), price: 1.99},
                ],
                tuanBuyList: [ // 拼团团购列表
                    {
                        url: require("../assets/images/home/tuan-product-1.png"),
                        title: "澳门风味香酥鸡蛋卷饼干过年送礼年货礼盒装春礼年货礼盒装春",
                        tuanPerson: 6,
                        currPerson: 1,
                        hadTime: "活动已经结束",
                        price: 180,
                        hadBuy: 1
                    },
                    {
                        url: require("../assets/images/home/tuan-product-2.png"),
                        title: "澳门风味香酥鸡蛋卷饼干过年送礼年货礼盒装春礼年货礼盒装春",
                        tuanPerson: 6,
                        currPerson: 1,
                        hadTime: "活动已经结束",
                        price: 180,
                        hadBuy: 1
                    },
                    {
                        url: require("../assets/images/home/tuan-product-1.png"),
                        title: "澳门风味香酥鸡蛋卷饼干过年送礼年货礼盒装春礼年货礼盒装春",
                        tuanPerson: 6,
                        currPerson: 1,
                        hadTime: "活动已经结束",
                        price: 180,
                        hadBuy: 1
                    },
                    {
                        url: require("../assets/images/home/tuan-product-2.png"),
                        title: "澳门风味香酥鸡蛋卷饼干过年送礼年货礼盒装春礼年货礼盒装春",
                        tuanPerson: 6,
                        currPerson: 1,
                        hadTime: "活动已经结束",
                        price: 180,
                        hadBuy: 1
                    },
                ],
                tuijianList: [ // 推荐列表
                    {url: require("../assets/images/home/tuijian-product-2.png"), price: 5.9, oldPrice: 12.9},
                    {url: require("../assets/images/home/soncai-1.png"), price: 5.9, oldPrice: 12.9},
                    {url: require("../assets/images/home/tuijian-product-1.png"), price: 5.9, oldPrice: 12.9},
                    {url: require("../assets/images/home/tuijian-product-2.png"), price: 5.9, oldPrice: 12.9},
                ],
                bottomList: [ // 底部列表
                    {
                        url: require("../assets/images/home/tuan-product-1.png"),
                        title: "澳门风味香酥鸡蛋卷饼干过年送礼年货礼盒装春礼年货礼盒装春",
                        tuanPerson: 6,
                        currPerson: 1,
                        hadTime: "活动已经结束",
                        price: 180,
                        hadBuy: 1
                    },
                    {
                        url: require("../assets/images/home/tuan-product-2.png"),
                        title: "澳门风味香酥鸡蛋卷饼干过年送礼年货礼盒装春礼年货礼盒装春",
                        tuanPerson: 6,
                        currPerson: 1,
                        hadTime: "活动已经结束",
                        price: 180,
                        hadBuy: 1
                    },
                ],
                showGoTop: false // 是否显示返回到顶部
            }
        },
        mounted() {
            window.onscroll = () => {
                return (() => {
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    if (scrollTop > 500) {
                        this.showGoTop = true;
                    } else {
                        this.showGoTop = false;
                    }
                })();
            };
        },
        methods: {
            // 搜索
            search(){
                console.log(this.searchVal);
            },
            // 点击上面导航项
            onItemClick(index) {
                console.log(this.tablist[index]);
            },
            // 查看更多
            jump(){
                console.log("查看更多")
            },
            // 回到顶部
            goTop() {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        },
    }
</script>

<style lang="less" scoped>
  .big-content {
    background-color: #f1f4f5;
  }

  .top {
    background-color: #cc1b1d;
    position: relative;

    .top-bg {
      width: 100%;
    }

    /*上面内容*/

    .top-content {
      color: #fff;
      position: absolute;
      top: 0;
      width: 100%;
      padding: .52rem .2rem 0;
      /*搜索*/

      .search-box {
        background-color: #b82d21;
        border-radius: 3px;
        height: .55rem;

        .input-box {
          padding: 0 .2rem;
          flex: 1;

          .search-icon {
            color: #fff;
            font-size: .3rem;
          }

          input {
            flex: 1;
            border: none;
            outline: none;
            height: .55rem;
            background-color: transparent;
            color: #fff;
            font-size: .28rem;
            padding: 0 .1rem;
          }
        }

        .search-btn {
          height: .3rem;
          padding: 0 .2rem;
          font-size: .22rem;
          border-left: 1px solid #fff;
        }
      }

      /*  导航条*/

      .tab-box {
        /deep/ .vux-tab-container {
          height: .84rem;
        }

        /deep/ .vux-tab-wrap {
          padding-top: .84rem;
        }

        .vux-tab-item {
          color: #ffffff;
          font-size: .26rem;
          line-height: .84rem;
          background: transparent;
        }

        .scroll-tab-box {
          .vux-tab-item {
            flex: 0 0 14.5%;
          }
        }

        /deep/ .vux-tab {
          background-color: transparent;
          height: .84rem;
        }
      }
    }
  }

  /*  下面内容*/
  .bottom-content {
    > div {
      border-radius: .1rem;
    }

    font-size: .22rem;
    padding: .3rem .2rem 1.4rem;
    /*一元推荐*/

    .row-1 {
      background-color: #fff;

      .prodect-list {
        padding: .2rem;
      }

      .img-bg {
        width: 100%;
      }

      .content-box {
        position: relative;
      }

      /*发起拼团*/

      .msg-box {
        background: #9fa0a1;
        font-size: .2rem;
        color: #fff;
        position: absolute;
        top: .2rem;
        height: .5rem;
        left: -.2rem;
        padding: 0 .15rem 0 .2rem;
        border-radius: 0 .25rem .25rem 0;

        img {
          vertical-align: middle;
          width: .3rem;
          height: .3rem;
          margin-right: .1rem;
          border-radius: 50%;
        }
      }
    }

    /*送菜上门*/

    .row-2 {
      padding: 0 .2rem;
      margin-top: .35rem;
      position: relative;
      background: linear-gradient(#fff, #fff7f5);

      .content-title {
        height: .75rem;
        border-bottom: 1px solid #f4f4f4;
        color: #808080;

        img {
          width: 2rem;
        }
      }

      ul {
        text-align: center;
        padding: .15rem 0;

        li {
          width: 25%;
          padding: 0 .2rem;
          position: relative;
          height: 1.75rem;
          border-right: 1px solid #f1f4f5;
          border-bottom: 1px solid #f1f4f5;

          .img-box {
            height: 1.2rem;

            img {
              width: 100%;
            }
          }

          .price {
            color: #cc1b1d;
            width: 100%;
            position: absolute;
            bottom: .25rem;
            left: 0;
            font-size: .18rem;
          }
        }

        li:nth-child(4n) {
          border-right: none;
        }

        li:nth-child(5), li:nth-child(6), li:nth-child(7), li:nth-child(8) {
          border-bottom: none;
        }
      }
    }

    /*拼团团购*/

    .row-3 {
      padding: 0 .2rem;
      background: #fff;
      margin-top: .25rem;

      .content-title {
        height: .75rem;
        border-bottom: 1px solid #f4f4f4;

        img {
          width: 1.95rem;
        }
      }
    }

    /*特别推荐*/

    .row-4 {
      background: #fff;
      padding: 0 .2rem;
      margin-top: .2rem;

      .content-title {
        height: .8rem;
        border-bottom: 1px solid #f4f4f4;

        span {
          color: #808080;
          display: inline-block;
          padding: 0 .1rem;
          border-right: 1px solid #ddd;
        }

        span:last-child {
          border: none;
        }

        .active {
          font-size: .26rem;
          color: #606060;
        }
      }

      .item {
        .img-box {
          padding: 0 .4rem;
          height: 1.7rem;

          img {
            width: 100%;
          }
        }

        position: relative;
        width: 29.42vw;
        height: 2.4rem;
        text-align: center;
        font-weight: 600;

        .price-box {
          position: absolute;
          bottom: .3rem;
          left: .1rem;
        }

        .new-price {
          font-size: .25rem;
          color: #cc1b1d;
        }

        .old-price {
          font-size: .18rem;
          color: #808080;
          text-decoration: line-through;
        }
      }
    }

    .row-5 {
      background: #fff;
      padding: 0 .2rem;
      margin-top: .2rem;
    }


    /*  产品列表*/

    .list-item {
      display: flex;
      height: 2.8rem;

      .left-box {
        width: 3.2rem;

        img {
          width: 100%;
          max-height: 2.6rem;
          border: 1px solid #eee;
        }
      }

      .right-box {
        flex: 1;
        font-size: .24rem;
        margin-left: .15rem;
        border-bottom: 1px solid #eee;
        position: relative;

        .right-content {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          transform: translateY(-50%);
          color: #cc1b1d;

          .title {
            font-size: .26rem;
            color: #484848;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }

          /*产品原价*/

          .old-price {
            font-size: .18rem;
            margin: .2rem 0;
          }

          /*开始时间*/

          .start-time {
            font-size: .22rem;
            margin-bottom: .2rem;
          }

          /*成团人数,当前参团人数*/

          .tuan-person {
            margin-top: .2rem;
          }

          .tuan-person, .curr-person {
            font-size: .2rem;
            color: #808080;
            margin-bottom: .15rem;
          }

          /*剩余时间*/

          .had-time {
            font-size: .22rem;
            margin-bottom: .15rem;
          }

          /*现在价格*/

          .now-price {
            font-weight: 800;
            font-size: .2rem;

            span {
              font-size: .4rem;
            }

            .money {
              font-size: .24rem;
            }

            .had-buy {
              font-size: .18rem;
              color: #808080;
            }
          }

          /*已购买 go*/

          .to-buy {
            height: .5rem;
            text-align: center;
            border-radius: .25rem;
            font-size: .18rem;
            background-color: #ffdede;
            padding: 0 .05rem 0 .35rem;
            background-image: url("../assets/images/home/fire.png");
            background-position: .12rem center;
            background-size: .18rem;
            background-repeat: no-repeat;

            .go {
              display: inline-block;
              margin-left: .1rem;
              padding: 0 .05rem;
              height: .4rem;
              line-height: .4rem;
              background-color: #cc1b1d;
              border-radius: .2rem;
              color: #fff;
            }
          }

          /*  立即购买*/

          .go-buy {
            font-size: .2rem;
            padding: .08rem .05rem;
            background: #cc1b1d;
            color: #fff;
            border-radius: .05rem;
          }
        }
      }
    }

    .list-item:last-child .right-box {
      border-bottom: none;
    }

    .list-item-big {
      height: 2.95rem;

      .left-box {
        img {
          max-height: 2.8rem;
        }
      }
    }
  }

  /*  底部导航条*/
  .tab-bar-box {
    background: #fff;
    height: 1.2rem;
    bottom: -1px;

    /deep/ .weui-tabbar__item {
      padding-top: .3rem;
      height: 1.2rem;
    }

    /deep/ .weui-tabbar__icon {
      width: .4rem;
      height: .4rem;
    }

    /deep/ .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
      color: #cc1b1d;
    }

    /deep/ .weui-tabbar__label {
      color: #808080;
    }

    .icon-middle {
      position: relative;

      /deep/ .weui-tabbar__icon {
        position: absolute;
        top: 55%;
        left: 50%;
        width: inherit;
        height: inherit;
        transform: translate(-50%, -50%);

        img {
          width: .8rem;
          height: auto;
        }
      }
    }
  }

  .tab-bar-box:before {
    border: none;
    height: 0;
  }

  /*返回顶部*/
  .go-top {
    position: fixed;
    bottom: 1.2rem;
    right: .4rem;

    img {
      width: .6rem;
    }
  }

  .allow-down {
    position: absolute;
    left: .4rem;
    top: -.15rem;
    width: 0;
    height: 0;
    border-left: .2rem solid transparent;
    border-right: .2rem solid transparent;
    border-bottom: .2rem solid #fff;
  }

  .show-enter-active, .show-leave-active {
    transition: opacity .5s;
  }

  .show-enter, .show-leave-to {
    opacity: 0;
  }
</style>
