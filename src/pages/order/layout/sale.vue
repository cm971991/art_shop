<template>
  <div class="order-panel clearfix n-bt">
    <div class="title-header">使用优惠</div>
    <div class="preferential-box">
      <ul class="box-title">
        <li :class="{ active: ticketActive }" @click="saleItemClick('ticket')">代金券</li>
        <li :class="{ active: codeActive }" @click="saleItemClick('code')">艺网码</li>
      </ul>
      <ul class="box-tab">
        <li class="bonus-box" :class="{ active: ticketActive }">
          <div class="voucher-box clearfix" :style="{ height: ticketHeight + 'px' }">
            <template v-for="(item,index) in ticketList">
              <div class="list_d voucher-item" :class="[{ ndei: index<=3 },{ dei: index>3 }]">
                <div class="tr canuse">
                  <p class="p1">
                    <span>¥</span>
                    <span>{{ item.price }}</span>
                    <span>({{ item.priceCondition }})</span>
                  </p>
                  <p class="p2">
                    <span>使用条件：</span>
                    <span>{{ item.useCondition }}</span>
                  </p>
                  <hr>
                  <p class="p3">适用于全部(<span>{{ item.application }}</span>)</p>
                  <p class="p4">{{ item.startTime }}-{{ item.endTime }}</p>
                </div>
                <span><i class="icon-check" v-html="checkIcon"></i></span>
              </div>
            </template>
            <p>
              <span @click="allTicket">{{ ticketHtml }}</span>
            </p>
          </div>
          <div class="bottom-box">
            <p class="yh">优惠券抵扣：-￥<span></span></p>
          </div>
        </li>
        <li class="panel-pay-price" :class="{ active: codeActive }">
          <div class="coupons clearfix">
            <div class="item">
              <div class="input-div">
                <input type="text" class="sale-code" placeholder="使用爱艺码">
                <input type="button" value="使 用" class="button">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        checkIcon: '&#xe643;',
        ticketActive: false,
        codeActive: true,
        ticketList: [
          {
            id: 't1',
            price: '300',
            priceCondition: '新用户注册',
            useCondition: '满9000可用',
            application: '每笔订单限用一张',
            startTime: '2017-12-12 11:27',
            endTime: '2019-01-02 03:09'
          },
          {
            id: 't2',
            price: '200',
            priceCondition: '新用户注册',
            useCondition: '满6000可用',
            application: '每笔订单限用一张',
            startTime: '2017-12-12 11:27',
            endTime: '2019-01-02 03:09'
          },
          {
            id: 't3',
            price: '100',
            priceCondition: '新用户注册',
            useCondition: '满3000可用',
            application: '每笔订单限用一张',
            startTime: '2017-12-12 11:27',
            endTime: '2019-01-02 03:09'
          },
          {
            id: 't4',
            price: '98',
            priceCondition: '98元代金券',
            useCondition: '满99可用',
            application: '可与其他代金券叠加使用',
            startTime: '2017-12-12 11:27',
            endTime: '2019-01-02 03:09'
          }
        ],
        ticketHeight: 160,
        ticketClickFlag: false,
        ticketHtml: '全部代金券 ▼'
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      /**
       * 使用优惠菜单切换
       * @param type
       */
      saleItemClick (type) {
        switch (type) {
          case 'ticket':
            this.codeActive = false
            this.ticketActive = true
            break
          case 'code':
            this.ticketActive = false
            this.codeActive = true
            break
        }
      },
      /**
       * 全部代金券
       */
      allTicket () {
        if (!this.ticketClickFlag) {
          let ticketListLength = this.ticketList.length
          if (ticketListLength > 3) {
            let num = parseInt(ticketListLength % 3)
            this.ticketHeight = 150 * (num + 1)
          }
          this.ticketHtml = '收起 ▲'
          this.ticketClickFlag = true
        } else {
          this.ticketHeight = 160
          this.ticketHtml = '全部代金券 ▼'
          this.ticketClickFlag = false
        }
      }
    }
  }
</script>
