<style lang="scss">
  @import '../../assets/css/abstract';
  .ctable{
    width:100%;
    background: white;
    border: 1px solid #BDC3CA;
    border-radius:4px;
    display:table;
    .cell{
      display: inline-block;
      width:100%;
      >div{
        display: inline-block;
      }
      .filter{
        position: relative;
      }
    }
    .sort{
      width:15px;
      height:32px;
      position: relative;
      margin-left:5px;
      i{
        cursor: pointer;
        border-left:6px solid transparent;
        border-right: 6px solid transparent;
        position: absolute;
        left:0;
        display: block;
      }
      i:first-child{
        &.active{
          border-bottom: 6px solid #48576a;
        }
        top:8px;
        border-bottom: 6px solid #97a8be;
      }
      i:last-child{
        bottom:9px;
        border-top: 6px solid #97a8be;
        &.active{
          border-top:6px solid #48576a;
        }
      }
    }
    table{
      width:100%;
      line-height: 40px;
      text-align: center;
      thead{
        tr{
          th:first-child{
            border-top-left-radius: 4px;
          }
          th:last-child{
            border-top-right-radius: 4px;
          }
        }
      }
      &.bill{
        /*background: #EDF6FD;*/
        th{
          /*border-bottom: 1px solid #C0D8F0;*/
          background: linear-gradient(to bottom, #F0F2F5, #E1E3E6);
          color:#4C545B;
          box-sizing: content-box;
        }
        td{
          color:#666666 ;
          border-bottom:1px solid #E0E6ED;
        }
        tr:nth-child(2n-1){
          background:#FAFAFA;
        }
        tr:nth-child(2n){
          background:#F4F4F4;
        }
        .Specil{
          background-color:#F5F5F5 !important;
          .icon-icon_warning{
            cursor:auto !important;
          }
          .cell{
            color:#b5b2b2;
          }
          .weight{
            color:#b5b2b2;
          }
          .lighter{
            color:#b5b2b2;
          }
        }

      }
      &.info{
        /*background: #EDF6FD;*/
        th{
          /*background: #EDF6FD;*/
          border-bottom: 1px solid rgba(65, 155, 249, .5);
        }
        td{
          border-bottom:1px solid rgba(193, 218, 247, .5);
          &.check{
            border-bottom: none;
          }
        }
      }
      tr:last-child td{
        border-bottom: none;
      }
      &[falign=left]{
        text-align: left;
      }
      &[falign=right]{
        text-align: right;
      }
      td{
        font-size: 13px;
        line-height: 21px;
        position: relative;
        padding: 10px;
        box-sizing: content-box;
        .allRight{
          width:100%;
          padding-right: 16px;
          text-align: right;
        }
        .allLeft{
          width:100%;
          padding-left: 16px;
          text-align: left;
        }
      }
      th{
        font-size: 13px;
        padding:0 10px;
        height:32px;
        line-height:32px;
        i{
          transition: .3s;
        }
        .el-icon-arrow-down.active{
          transform: rotate(180deg);
        }
      }
      &.def{
        th{
          background: linear-gradient(to bottom, #F0F2F5, #E1E3E6);
          box-sizing:content-box;
          .cell{
            position: relative;
            &:before{
              /*@include default-pseudo;
              width:8px;
              height:8px;
              left:-12px;
              top:16px;
              border-radius: 5px;
              background: #F5BB80;*/
            }
            &.none{
              &:before{
                display: none;
              }
            }
          }
        }
      }
      &.history{
        th{
          background: #F7F7F7;
          box-sizing:content-box;
        }
        tr{
          height:32px;
        }
        tr:nth-child(2n-1) {
          background-color:#FFF;
        }
        tr:nth-child(2n) {
          background-color:#FAFAFA;
        }
      }
      &.small{
        th{
          background: #F7F7F7;
          box-sizing:content-box;
        }
        tr{
          height:32px;
        }
        tr:nth-child(2n-1) {
          background-color:#FFF;
        }
        tr:nth-child(2n) {
          background-color:#FAFAFA;
        }
      }
    }
    .s-body{
      overflow: auto;
      tr:nth-child(2n-1) {
        background-color:#FFF;
      }
      tr:nth-child(2n) {
        background-color:#F5F7FA;
      }
      tr{
        border-bottom:1px solid #E0E6ED;
        height:50px;
        line-height:50px;
        transition: .3s;
        .hover{
          visibility: hidden;
        }
      }
      tr:hover{
        background-color:#dfe6ec;
        .hover{
          visibility: visible;
        }
      }
      tr:last-child{
        border:0px;
        td:first-child{
          border-bottom-left-radius:4px;
        }
        td:last-child{
          border-bottom-right-radius:4px;
        }
      }
      td.disabled{
        color:#999999;
      }
      td.abated{
        color:#DF5D5D;
      }
      td.gray{
        color:#807d7d;
      }
      td.disuse{
        color:#b8b5b5 !important;
      }
      td.disuse div.cell{
         text-decoration:line-through;
      }
      td .handle{
        color:#479CF3;
        margin-right:10px;
        cursor:pointer;
      }
      td.red{
         color:#DF5D5D;
      }
      td .bingdelete{
        color:#479CF3;
        cursor:pointer;
      }
      td .tdelete{
        color:#DF5D5D;
        cursor:pointer;
      }
    }
  }
  .component-filter{
    top: 100%;
    left:0;
  }
  /*
   * 用于筛选窗口
   */
  .table-filter{
    width:200px;
    transition: .3s;
    .search-box{
      padding:10px 0;
      width:100%;
      border-bottom:1px solid #B3CFF4;
      div{
        width:160px;
        margin:auto;
        height:30px;
        line-height: 30px;
        position: relative;
        background: #EDF6FD;
        padding-left:35px;
        border-radius: 15px;
        .search{
          position: absolute;
          width:22px;
          height:22px;
          left:7px;
          top:4px;
        }
        input{
          width:100%;
          line-height: 25px;
          background: none;
          border:none;
          font-size:14px;
          color:#8BB8F1;
        }
      }
    }
    .list{
      ul{
        text-align: left;
        max-height: 220px;
        overflow: auto;
      }
      li{
        padding-left: 20px;
        font-size: 14px;
        .el-checkbox{
          color:#3f4954;
        }
        .el-checkbox__inner{
          transform: scale(.9);
        }
        > div{
          border-bottom: 1px solid #E2ECF9;
        }
        &:last-child div{
          border:none;
        }
        &.full-select{
          .el-checkbox{
            color:$c-blue;
          }
          border-bottom: 1px solid #E2ECF9;
          padding-left:10px;
        }
        &.radio{
          cursor: pointer;
          transition: background .3s;
          position: relative;
          padding-right:10px;
          &:hover{
            background: #eef1f6;
          }
          i{
            position: absolute;
            right:7px;top:50%;
            font-size:12px;
            line-height: 12px;
            margin-top:-6px;
          }
        }
      }
      &.radio{
        li{
          border: none;
          border-bottom: 1px solid #E2ECF9;
          > div{
            border-bottom: none;
          }
        }
      }
      .oprate{
        font-size: 16px;
        color:$c-blue;
        border-top:1px solid #B3CFF4;
        div{
          cursor: pointer;
          padding:0 20px;
        }
      }
    }
  }
  .filter-num{
    display: inline-block;
    width:30px;
  }
  .select{
    color:$c-blue;
  }
  table[vertical=top]{
    td{
      vertical-align: top;
      box-sizing: content-box;
    }
  }
  table[vertical=bottom]{
    td{
      vertical-align: bottom;
      box-sizing: content-box;
    }
  }
  .ctable-nomore{
    padding: 10px;
    font-size: 14px;
    text-align: center;
    color:gray;
    &.bill,info{
      /*background: #EDF6FD;*/
    }
  }
  .fontRed,.icon-icon_warning{
    color:#DF5D5D
  }
</style>
<template>
  <div class="ctable">
    <!--表头-->
    <table :class="[type]" :falign="align" cellspacing="0" cellpadding="0">
      <s-colgroup :columns="columns" :width="tableWidth"></s-colgroup>
      <thead>
        <tr>
          <th
            v-for="(th,i) in fcolumns"
            :class="`col-${_uid}-${i}`"
            @click="$emit('head-click',th)"
            :style="{cursor:th.oprate?'pointer':''}"
            :align="th.align" :key="th.prop">
            <!--判断显示黄色原点标识-->
            <div class="cell" :class="{none:th.prop === 'table-check' || !th.label}">
              <!--无操作-->
              <template v-if="!th.oprate">
                <div v-if="th.prop === 'table-check'">
                  <el-checkbox v-model="th.check" @change="columnSelectAll"></el-checkbox>
                </div>
                <div v-else>
                  {{th.label}}
                </div>
              </template>
              <!-- 搜索筛选 -->
              <div v-if="th.oprate === 'filter'" class="filter">
                <div @click="opShow(th,i)" :class="getSelectStatus(th.filteData.filters)">
                  {{th.label}} <i class="el-icon-arrow-down" :class="{active:th.opshow}"></i>  <span class="filter-num" v-if="th.filteData.mutiple && getSelectNum(th)">{{getSelectNum(th)}}</span>
                </div>
                <transition name="el-zoom-in-top">
                  <div class="table-filter dialog-bg comment-filter" v-if="th.opshow" :style="{right:i === fcolumns.length - 1?0:''}">
                    <div class="search-box" v-if="th.filteData.search">
                      <div>
                        <i class="search"></i>
                        <input type="text" placeholder="搜索" v-model="th.searchKey">
                      </div>
                    </div>
                    <div v-if="th.filteData.mutiple" class="list">
                      <ul>
                        <li class="full-select">
                          <el-checkbox label="全选" @change="doSelectAll($event,th)"></el-checkbox>
                        </li>
                        <li v-for="item in th.flist" :key="item.id">
                          <div>
                            <el-checkbox :label="item.name" v-model="item.select"></el-checkbox>
                          </div>
                        </li>
                      </ul>
                      <div class="oprate flex type3">
                        <div @click="filterChange(th,true)">确定</div>
                        <div @click="filterChange(th,false)">重置</div>
                      </div>
                    </div>
                    <div v-else class="list radio">
                      <ul>
                        <li
                          v-for="item in th.flist"
                          class="radio"
                          :key="item.id"
                          :class="{select:item.select}"
                          @click="radioChange(th,item.id)">
                          <div>
                            {{item.name}}
                            <i class="el-icon-check" v-if="item.select"></i>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition>
              </div>
              <!--带排序-->
              <div class="sort clear" v-if="th.sort">
                <i :class="{active:(sortColumn === th.prop && sortStatus === 'ascending')}" @click="setSort(th.prop,'ascending')"></i>
                <i :class="{active:(sortColumn === th.prop && sortStatus === 'descending')}" @click="setSort(th.prop,'descending')"></i>
              </div>
            </div>
          </th>
        </tr>
      </thead>
    </table>
    <!-- tbody体 -->
    <div class="s-body" :style="{'max-height': height+'px' || 'auto'}">
      <table style="width:100%" :class="[type]" :falign="align" :vertical="vertical" cellspacing="0" cellpadding="0">
        <s-colgroup :columns="columns" :width="tableWidth"></s-colgroup>
        <!-- 特殊情况处理 -->
        <template v-if="specliDate.length>0">
           <tr v-for="(row,i) in specliDate" :key="i" @click="rowClick($event,row,i)" class="Specil">
              <td v-for="(item,ci) in specli" :align="item.align" :class="getClass(item,row,ci)" :key="item.prop">
                <template  v-if="item.prop ==='errIcon'">
                 <i class="iconfont icon-icon_warning"></i>
                </template>
                <template v-else>
                  <t-render :row="row" :index="i" :col="item"></t-render>
                </template>
              </td>
            </tr>
        </template>
        <!-- 可拖动排序列表 -->
        <template v-if="typeof draggable !== 'object'">
          <draggable  v-model="data"  @end="end(data)" :element="'tbody'" :options="{animation: 200,disabled: !draggable}">
            <tr v-for="(row,i) in data" :key="row.id" @click="rowClick($event,row,i)" :style="{cursor:draggable?'move':'default'}">
              <td v-for="(item,ci) in columns" :align="item.align" :class="getClass(item,row,ci)" :key="item.prop">
                <template v-if="item.prop === 'table-check'">
                  <el-checkbox v-model="checkArr[i]" @change="selected($event,row)"></el-checkbox>
                </template>
                <template v-else>
                  <t-render :row="row" :index="i" :col="item"></t-render>
                </template>
              </td>
            </tr>
          </draggable>
        </template>
        <!-- 正常列表 -->
        <template v-else>
          <tbody>
            <tr v-for="(row,i) in data" :key="i" @click="rowClick($event,row,i)">
              <td v-for="(item,ci) in columns" :align="item.align" :class="getClass(item,row,ci)" :key="item.prop">
                <template v-if="item.prop === 'table-check'">
                  <el-checkbox v-model="checkArr[i]" @change="selected($event,row)"></el-checkbox>
                </template>
                <template v-else-if="item.prop === 'banquet'">
                  <el-checkbox v-if="row.selected" disabled v-model="row.checked">已选过</el-checkbox>
                  <el-checkbox v-model="row.checked" v-else  @change="singlecheckd(row)"></el-checkbox>
                </template>
                <!-- 订单详情处理 -->
                <template v-else-if="item.prop==='use_money'">
                   <o-render :row="row" :index="i" col="refund_fee"></o-render>
                   <o-render :row="row" :index="i" col="use_money"></o-render>
                </template>
                <!-- 订单详情处理end -->
                <template v-else-if="item.prop === 'is_use'">
                  <el-checkbox v-model="row.is_use" @change="selectman(row.income_type_user_id,row.is_use)"></el-checkbox>
                </template>
                <template v-else>
                  <t-render :row="row" :index="i" :col="item"></t-render>
                </template>
              </td>
            </tr>
          </tbody>
        </template>
      </table>
    </div>
    <div class="ctable-nomore" v-if="data.length === 0" :class="[type]">
      暂无数据
    </div>
  </div>
</template>
<script>
/**
 * ctable组件说明
 * @param {table.props}
 * data 表格数据
 * height 表格高度 用于滚动
 * type 表格类名
 *    def 默认表格样式
 *    bill 蓝色账单格式
 *    info 蓝色背景  操作模式 table-check列 覆盖底边框  见短信模块表格
 * align left right 表格全局内容横向浮动设置
 * vertical top bottom 不填写为中间 td内容纵向浮动
 * disabled Oject {key:'',value:''} 如果某一行中的key值 等于 其中的value 则该行所有td元素加入 disabled类名
 * disdelete Oject {key:'',value:''} 如果某一行中的key值 等于 其中的value 则该行所有td元素加入 disused类名
 * disred Oject {key:'',value:''} 如果某一行中的key值 等于 其中的value 则该行所有td元素加入 red类名
 * disgray Oject {key:'',value:''} 如果某一行中的key值 等于 其中的value 则该行所有td元素加入 gray类名
 * draggable object {open:true} 是否允有拖动操作 open为 true可拖动
 * columns arr
 *    带选择列
 *      {
          prop: 'table-check',
          width: 60
        },
 *    check true 加入选项为选择列
 *    label 表头显示
 *    align left right 单列浮动设置
 *    prop 此行字段名
 *    oprate [filter] 操作方式 不写默认显示label
 *    filteData 筛选参数
 *      search bool 是否带搜索
 *      mutiple 筛选方式是否为多选
 *      filters 筛选项 数组对象 对象中必须含有 id name属性
 *    width 列宽度 数字
 *    sort bool 是否有排序功能
 *    render 如果存在 则td内容按 render渲染 否则渲染字段值 render参数 (h,{row,index,col})
 *    filter function 过滤函数 参数为当前prop 键值
 * @param {table.event}
 * sort-change 字段排序更改 触发参数 (字段名,排序方式 asc·desc)
 * filter-change 筛选事件 触发参数(筛选后的对象数组 与filters 一致,字段名) //多选和单选都为统一参数与事件
 * head-click 点击表头某一列 触发参数(当前columns)
 * row-click 表格行点击事件 触发参数(row,index)
 * select-change 选中某一列或者全部触发 param1 元素组成的数组 param2 是否选中 boolean
 * @param {table.method}
 * getSelectRow 获取所有选中的列数据
 * clearFilters 清空所有筛选状态
 * clearSelector 清空所有选中
 * chooseRow(i) 选中某一行
 */
// import stbody from './table-body'
export default {
  components: {
    // od组件渲染
    oRender: {
      functional: true,
      /**
       * @param {row} obj 行数据
       * @param {index} number 行索引
       * @param {col} obj 列属性
       */
      props: ['row','index','col'],
      render(h,ctx) {
        var child
        var {col} = ctx.props
        if(col.render){
          var view = col.render(h,ctx.props)
          // mouseover 才显示
          if(col.hover) {
            view = (
              <div class="hover">
                {view}
              </div>
            )
          }
          child = [view]
        }else{
          if(col=='refund_fee'){
            if(eval(`ctx.props.row.${col}`)==''){
              var childText='';
            }else{
              var childText ='退款扣费：'+eval(`ctx.props.row.${col}`)
            }
          }else if(col=='use_money'){
            if(eval(`ctx.props.row.${col}`)==''){
              var childText='';
            }else{
              var childText ='可用金：'+eval(`ctx.props.row.${col}`)
            }
          }
          if(col.filter) {
            childText = col.filter(childText)
          }
          child = childText || h('i',{class:['el-icon-minus']})
        }

        var tdclass = col.class || []
        return h(
          'div',
           child
        )
      }
    },
    // td组件渲染
    tRender: {
      functional: true,
      /**
       * @param {row} obj 行数据
       * @param {index} number 行索引
       * @param {col} obj 列属性
       */
      props: ['row','index','col'],
      render(h,ctx) {
        var child
        var {col} = ctx.props
        if(col.render){
          var view = col.render(h,ctx.props)
          // mouseover 才显示
          if(col.hover) {
            view = (
              <div class="hover">
                {view}
              </div>
            )
          }
          child = [view]
        }else{
          var childText = eval(`ctx.props.row.${col.prop}`)
          if(col.filter) {
            childText = col.filter(childText)
          }
          child =childText || h('i',{class:['el-icon-minus']})
        }
        if(col.style){
          child='¥'+child;
          var style=col.style;
          var ntype=ctx.props.row.type_key;
          if(ntype=='tk'){
            var tdclass = col.class || []
            child='-'+child;
            return h(
              'div',
              {
                class: ['cell',...tdclass,'fontRed']
              },
              child
            )
          }else{
            var tdclass = col.class || []
            return h(
              'div',
              {
                class: ['cell',...tdclass]
              },
              child
            )
          }
        }else{
            var tdclass = col.class || []
            return h(
              'div',
              {
                class: ['cell',...tdclass]
              },
              child
            )
        }
      }
    },
    //colgroup组件 用于计算列宽度
    sColgroup: {
      functional: true,
      props: ['columns','width'],
      render(h,ctx) {
        var {columns,width} = ctx.props
        var setCol = columns.filter(c => {
          if(c.width){
            width -= parseInt(c.width)
          }
          return c.width
        })
        // 平均列宽度
        var ave = parseInt((width / (columns.length - setCol.length)))
        var colArr = []
        columns.forEach((col,i) => {
          var attrs = {
            name: `col-${ctx.parent._uid}-${i}`,
            width: (col.width || (col.prop === 'table-check'?30 : ave))
          }
          colArr.push(
            h('col',{attrs})
          )
        })
        return h('colgroup',colArr)
      }
    }
  },
  data() {
    return {
      date: null,
      tableWidth: 0,
      sortColumn: null,
      sortStatus: '',
      fcolumns: [],
      selectAll: false,
      // 筛选栏显示状态
      opshow: {},
      // 控制数据选中状态
      checkArr: []
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    specliDate:{
      type: Array,
      default() {
        return []
      }
    },
    specli:{
      type: Array,
      default() {
        return []
      }
    },
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    type: {
      type: String,
      default: 'def'
    },
    height: [Number,String],
    align: String,
    vertical: String,
    disabled: {
      type: Object,
      default: null
    },
    disdelete:{
      type: Object,
      default: null
    },
    disred:{
      type: Object,
      default: null
    },
    disgray:{
      type: Object,
      default: null
    },
    draggable: {
      type: [Boolean,Object],
      default: null
    },
    mresize:{
      type:[Boolean],
      default:null
    }
  },
  watch: {
    columns() {
      this.forMateCol()
      this.forMateData()
    },
    data()  {
      this.forMateData()
    },
    mresize(){
      this.tableWidth = $(this.$el).width()
    }
  },
  methods: {
    selected(e,row) {
      // this.$emit('select-change',[row],e.target.checked)
      if(!e.target.checked) {
        this.fcolumns[0].check = false
      }
    },
    //选人
    selectman(id,bool){
      var data={
        'id':id,
        'bool':bool
      }
      BUS.$emit('selectman',data);
    },
    singlecheckd(row){
      BUS.$emit('fsinglecheck',row.id,row.name)
    },
    // 获取td内容class
    getClass(col,row,colindex) {
      var cla = []
      cla.push(`col-${this._uid}-${colindex}`)
      // if(col.prop) {
      //   cla.push(col.prop)
      // }
      if(this.disabled) {
        if(this.disabled.value == row[this.disabled.key]) {
          cla.push('disabled')
        }
      }
      //针对卡片管理
      if(this.disdelete){
       if(this.disdelete.value == row[this.disdelete.key]) {
          cla.push('disuse')
        }
      }
      if(this.disdelete){
       if(this.disdelete.value == row[this.disdelete.key]) {
          cla.push('disuse')
        }
      }
      if(this.disred){
       if(this.disred.value == row[this.disred.key]) {
          cla.push('red')
        }
      }
      if(this.disgray){
       if(this.disgray.value == row[this.disgray.key]) {
          cla.push('gray')
        }
      }
      //针对卡片管理结束
      if(col.prop === 'table-check') {
        cla.push('check')
      }
      return cla
    },
    // 点击在选择框上不触发行点击事件
    rowClick(e,row,i) {
      if(['el-checkbox__input','el-checkbox__inner','el-checkbox__original'].indexOf($(e.target).attr('class')) !== -1){
        return
      }
      this.$emit('row-click',row,i)
    },
    // 设置列排序
    setSort(prop,order) {
      var isSelect = (this.sortColumn === prop && this.sortStatus === order)
      this.sortColumn = isSelect?null:prop
      this.sortStatus = isSelect?null:order
      this.$emit('sort-change',this.sortColumn,this.sortStatus)
    },
    // 选中获取消所有行
    columnSelectAll(e) {
      this.checkArr = this.checkArr.map(() => e.target.checked)
      this.$emit('select-change',this.data,e.target.checked)
    },
    // 筛选条件 多选 选择全部或取消
    doSelectAll(e,th) {
      console.log(th)
      th.flist.forEach(item => item.select = e.target.checked)
    },
    // 多选筛选变化
    filterChange(th,op) {
      if(op) {
        this.$emit('filter-change',th.filteData.filters.filter(obj => obj.select),th.prop)
      }else{
        th.filteData.filters.forEach(obj => obj.select = false)
        this.$emit('filter-change',[],th.prop)
      }
      th.opshow = false
    },
    // 获取多选筛选中的选中数量
    getSelectNum(th) {
      if(th.filteData.mutiple){
        var count = th.filteData.filters.filter(f => f.select).length
        return count?`(${count})`:''
      }
    },
    //单选筛选变化
    radioChange(th,id) {
      var choose = []
      th.filteData.filters.forEach(t => {
        if(t.id === id && !t.select) {
          t.select = true
          choose.push(t)
        }else{
          t.select = false
        }
      })
      // 延迟收起 选中和取消改变更直观
      setTimeout(() => {
        th.opshow = false
      },60)
      this.$emit('filter-change',choose,th.prop)
    },
    // 判断筛选表头是否为选中颜色
    getSelectStatus(filters) {
      var select = filters.some(f => f.select)
      return {select}
    },
    // 判断若直接点击表头收起筛选 则返回原状态
    opShow(th) {
      if(th.opshow) {
        th.filteData.filters = this[th.prop+'filter']
      }else{
        this[th.prop+'filter'] = this.copy(th.filteData.filters)
      }
      // th.opshow = !th.opshow
      this.$set(th,'opshow',!th.opshow)
    },
    // // 格式化columns
    forMateCol() {
      this.fcolumns = this.copy(this.columns).map(col => {
        if(col.filteData) {
          col.opshow = false
          col.searchKey = ''
          col.filteData.filters.forEach(item => item.select = false)
          // 搜索筛选
          Object.defineProperty(col,'flist',{
            get() {
              return this.filteData.filters.filter(f => !this.searchKey || f.name.indexOf(this.searchKey) !== -1)
            }
          })
        }
        if(col.prop === 'table-check') {
          col.check = false
        }
        return col
      })
    },
    // 格式化data
    forMateData() {
      this.checkArr = []
      if(this.columns.some(c => c.prop === 'table-check')) {
        this.data.map((d,i) => {
          this.checkArr[i] = false
          return d
        })
      }
    },
    // 外界获取所选中的数据对象
    getSelectRow() {
      // return this.fdata.filter(data => data.check)
      var selectRows = []
      this.checkArr.forEach((e,i) => {
        if(e) {
          selectRows.push(this.data[i])
        }
      })
      return selectRows
    },
    // 外界清空所有筛选状态
    clearFilters() {
      this.fcolumns.forEach(col => {
        if(col.filteData){
          col.filteData.filters.forEach(fi => {
            fi.select = false
          })
        }
      })
    },
    // 清空所有选中
    clearSelector() {
      this.fcolumns.some(col => {
        if(col.prop === 'table-check') {
          col.check = false
          return true
        }
      })
      this.checkArr.map(() => false)
    },
    // 全局点击 关闭筛选框事件
    closeFilter(e) {
      if($(e.target).hasClass('table-filter') || $(e.target).parents('.cell').length) {
        return true
      }
      this.fcolumns.forEach(col => {
        if(col.filteData && this[col.prop+'filter'] && col.opshow === true){
          col.filteData.filters = this[col.prop+'filter']
        }
        col.opshow = false
      })
    },
    // 强制刷新方法
    refresh(i,key,val) {
      this.$set(this.fdata[i],key,val)
    },
    // 选中列 数字或 数字组成的数组
    chooseRow(rows,checked) {
      if(typeof rows === 'number'){
        this.$set(this.checkArr,rows,checked)
      }else{
        rows.forEach(i => {
          this.$set(this.checkArr,i,checked)
        })
      }
    },
    resize() {
      this.tableWidth = $(this.$el).width()
    },
    end(data){
      BUS.$emit('updataData',{data:data})
    }
  },
  // 表头信息初始化
  beforeMount() {
    this.forMateCol()
    this.forMateData()
  },
  destroyed() {
    $(window).unbind('click',this.closeFilter)
    $(window).on('unbind',this.resize)
  },
  mounted() {
    this.tableWidth = $(this.$el).width()
    $(window).on('click',this.closeFilter)
    $(window).on('resize',this.resize)
  }

}
</script>
