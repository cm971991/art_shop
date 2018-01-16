<template>
  <div class="artists">
    <div class="title">
      <h2>艺术家 / ARTIST</h2>
      <router-link :to="{ path: '/solicitation/'}" target="_blank">作品征集全面开放</router-link>
    </div>
    <div class="artist-box">
      <router-link :to="{ path: '/artist/' + currArtist.artistId +''}" target="_blank">
        <div class="cur-artist img-hover">
          <img v-lazy="currArtist.imgUrl">
          <div class="news-content">
            <h3 class="news-title">
              {{ currArtist.title }}
            </h3>
            <div class="news-desc">
              <p>{{ currArtist.desc }}</p>
            </div>
          </div>
        </div>
      </router-link>
      <div class="more-artist">
        <p>更多艺术家</p>
        <template v-for="(item,index) in artistList">
          <div class="artist" :key="index">
            <div class="info">
              <router-link :to="{ path: '/artist/' + item.artistId +''}" target="_blank">
                <p>{{ item.artistName }}</p>
              </router-link>
              <p>{{ item.artistCount }}件</p>
            </div>
            <router-link :to="{ path: '/artist/' + item.artistId +''}" target="_blank">
              <div class="artworks">
                <img v-lazy="item.imgUrls[0]">
                <img v-lazy="item.imgUrls[1]">
                <img v-lazy="item.imgUrls[2]">
              </div>
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import artistList from '../../../../static/data/index/artistList'

  export default {
    components: {},
    data () {
      return {
        currArtist: {
          artistId: '1',
          title: '吴霜：做一个艺术的信徒',
          desc: '“艺术是信仰，你不信，它便什么也不是，你信，它就能给你所有。”',
          imgUrl: require('../../../../static/images/index/artist/artist_1.jpg')
        },
        artistList: artistList
      }
    },
    created () {

    },
    mounted () {

    },
    computed: {},
    methods: {}
  }
</script>

<style lang="less" scoped>
  .artists {
    display: block;
    position: relative;
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    margin-bottom: 100px;
    .title {
      text-align: left;
      margin-bottom: 40px;
      height: 46px;
      line-height: 46px;
      h2 {
        letter-spacing: 3px;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        font-size: 26px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        color: #000000;
        margin-right: 34px;
      }
      a {
        display: inline-block;
        width: 180px;
        text-align: center;
        line-height: 38px;
        cursor: pointer;
        vertical-align: middle;
        height: 40px;
        border-radius: 20px;
        border: solid 1px #3c948b;
        box-sizing: border-box;
        color: #3a8373;
        font-size: 18px;
        font-weight: 500;
      }
    }

    .artist-box {
      width: 100%;
      height: 320px;
      .cur-artist {
        width: 450px;
        height: 320px;
        overflow: hidden;
        float: left;
        position: relative;
        img {
          z-index: 1;
        }
        .news-content {
          z-index: 2;
          position: absolute;
          background-image: url(../../../assets/images/common/top0bottomblack.png);
          background-size: 100% 100%;
          width: 100%;
          height: 100%;
          h3 {
            font-size: 16px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            color: #ffffff;
            position: absolute;
            bottom: 120px;
            padding: 0 20px;
          }
          .news-desc {
            font-size: 12px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.75;
            color: #ffffff;
            height: 84px;
            overflow: hidden;
            position: absolute;
            bottom: 18px;
            width: 410px;
            padding: 0 20px;
          }
        }
      }

      .more-artist {
        width: 679px;
        height: 320px;
        border-left: 1px solid #d8d8d8;
        margin-left: 24px;
        float: left;
        padding-left: 25px;
        & > p {
          height: 20px;
          line-height: 20px;
        }
        .artist {
          width: 210px;
          height: 280px;
          float: right;
          position: relative;
          margin-top: 20px;
          .info {
            height: 35px;
            width: 80px;
            left: 50%;
            position: absolute;
            top: 220px;
            padding: 20px 0;
            text-align: center;
            border-top: 1px solid #000;
            margin-left: -50px;
            p:nth-child(1) {
              font-size: 16px;
              font-weight: 500;
              font-style: normal;
              font-stretch: normal;
              line-height: 1.25;
              text-align: center;
              color: #000000;
            }
            p:nth-child(2) {
              font-size: 12px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: 1.67;
              text-align: center;
              color: #000000;
            }
          }
          .artworks {
            position: absolute;
            top: 0;
            left: 0;
            width: 210px;
            height: 210px;
            cursor: pointer;
            img {
              width: 180px;
              height: 180px;
              position: absolute;
              top: 0;
              left: 0;
              transition: all, 0.5s;
              transition-timing-function: ease-out;
            }
            img:nth-child(1) {
              box-shadow: -4px 2px 6px 0 rgba(0, 0, 0, 0.5);
              top: 10px;
              left: 10px;
              z-index: 3;
            }
            img:nth-child(2) {
              opacity: 0.6;
              z-index: 2;
            }
            img:nth-child(3) {
              opacity: 0.3;
              z-index: 1;
            }
          }
          &:nth-child(3) {
            margin: 0 24px;
            .info {
              top: 20px;
              border: 0;
              border-bottom: 1px solid #000;
              p:nth-child(2) {
                font-size: 12px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.67;
                text-align: center;
                color: #000000;
              }
            }
            .artworks {
              position: absolute;
              top: 120px;
              left: 0;
            }
          }
          &:hover img:nth-child(1) {
            box-shadow: -4px 2px 6px 0 rgba(0, 0, 0, 0.5);
            top: 30px;
            left: 30px;
          }
          &:hover img:nth-child(2) {
            top: 15px;
            left: 15px;
          }
        }
      }
    }
  }
</style>
