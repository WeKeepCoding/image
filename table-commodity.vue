<style lang="scss" scoped>
  @import '../../assets/css/abstract';
  .saleFormbox{
    .salebox{
      padding:15px 40px 20px;
      .saleForm{
        .shop-box {
          margin-bottom: 15px;
          .tagList {
            div{
              display:inline-block
            }
            color: $c-blue;
            display: inline;
            position:relative;
            span {
              display: inline-block;
              padding: 0 10px 0 9px;
              width: 149px;
              height: 28px;
              line-height: 26px;
              border-radius: 5px;
              font-size: 13px;
              border: 1px solid $c-blue;
              margin-right: 6px;
              i {
                padding-left: 5px;
                font-size: 12px;
                color: $c-blue;
                display: inline-block;
                position: absolute;
              }
            }
            .is_check{
              color:#8c8585;
              border:1px solid #8c8585;
              i{
                color:#8c8585;
                cursor:default !important;
              }
            }
          }
        }
        .el-form-item{
          margin-right:40px;
        }
        .search_input{
          width:25%;
          display:inline-block;
        }
      }

    }
    .el-button {
      width: 100px;
      height: 36px;
      border-radius: 100px;
      margin-bottom: 5px;
    }
  }


  .w60{width:60px;}
  .w130{width:130px;}
  .w320{width:320px;}
  .w120{width:120px;}
  .w110{width:110px;}
  .w160{width:180px;}
  .w390{width:390px;}
  table.shoptable{
    width:900px;
    text-align: center;
    border: 1px solid #E0E6ED;
    border-radius:4px;
    th{
      border-right:1px solid #E0E6ED;
      border-bottom:1px solid #E0E6ED;
      height:32px;
      background:rgba(247,247,247,1);
      color:#949494;
      font-size:11px;
      .el-checkbox{
        margin-right: 6px;
      }
    }
    th:last-child{
      border-right:0px;
    }
    td{
      font-size:12px;
      border-bottom:1px solid #E0E6ED;
      border-right:1px solid #E0E6ED;
      .specification{
        border-top:1px solid #E0E6ED;
        display:inline-flex;
        div {
          display:table-cell;
          border-right:1px solid #E0E6ED;
          height:40px;
          line-height:40px;
          .el-checkbox{
            padding-right:17px;
          }
        }
        div:last-child{
          border-right:0px;
        }
      }
      .specification:first-child{
        border-top:0px;
      }
    }
    td:last-child{
      border-right:0px;
    }
  }
</style>
<template>
  <s-dialog :show.sync="dialog" @close="close" size="s110 saleFormbox" >
    <template slot="title">添加商品<span style="margin:0 8px;">(已选:{{checkdelegnth}})</span></template>
    <template slot="content">
      <div class="salebox">
        <el-form ref="saleform"  label-width="60px" class="saleForm">
          <el-form-item label="所属分类" class="search_input">
              <el-cascader :options="goodslist" change-on-select v-model="shopid" @change="getallCategroy"></el-cascader>
          </el-form-item>
          <el-form-item label="商品名称" class="search_input">
            <el-input v-model="title" @input="getallCategroy"></el-input>
          </el-form-item>
        </el-form>
        <table class="shoptable">
          <thead>
          <tr>
            <th class="w60"><el-checkbox v-model="allcheck" @change="checkAll"></el-checkbox>全选</th>
            <th class="w130">商品分类</th>
            <th class="w320">商品名称</th>
            <th class="w120">单位（规格）</th>
            <th class="w110">销售价（元）</th>
            <th class="w160">商品编码</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,i) in categroylist">
            <td  class="w60"><el-checkbox v-model="item.is_check" true-label="1" false-label="0" @change="parentcheck(item.is_check,item,i)" v-if="item.is_check!=2"></el-checkbox><el-checkbox v-model="item.is_check" true-label="2" false-label="0" disabled v-else></el-checkbox></td>
            <td  class="w130">{{item.category_info}}</td>
            <td  class="w320">{{item.title}}</td>
            <td class="w390" colspan="3">
              <div class="specification" v-for="(child,s) in item.spec_list">
                <div class="w120" style="text-align:left;padding-left:5px;"><el-checkbox v-model="child.is_check" true-label="1" false-label="0" @change="childcheck(item,child.is_check)"  v-if="child.is_check!=2"></el-checkbox><el-checkbox v-model="child.is_check" true-label="2" false-label="0"  disabled v-else></el-checkbox>{{child.unit_name ? child.unit_name:'?'}}({{child.spec_name ? child.spec_name : '?'}}）</div>
                <div class="w110">¥ {{child.default_price}}</div>
                <div class="w160">{{item.product_code}}</div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <!--<div style="height:26px;text-align: right;margin-top:10px;">-->
          <!--<el-pagination-->
            <!--small-->
            <!--:page-size="pageSize"-->
            <!--layout="sizes,prev, pager, next, total"-->
            <!--:total="total"-->
            <!--:page-sizes="[10,20, 50,100]"-->
            <!--:current-page="currentPage"-->
            <!--@size-change="sizeChange"-->
            <!--@current-change="pageChange">-->
          <!--</el-pagination>-->
        <!--</div>-->
      </div>
    </template>
    <template slot="footer" class="dialog-footer">
      <el-button  class="def" @click="close">取 消</el-button>
      <el-button type="primary" class="submit" @click="submit">确 定</el-button>
    </template>
  </s-dialog>
</template>
<script>
export default{
  data(){
    return{
      searchname:'',
      total:0,
      page:1,
      pageSize:10,
      currentPage: 1,
      searchCondition:{
        p: 1,
        pageSize: 20,
        order: null,
        sort: null
      },
      rules: {},
      shopid:[],
      categroylist:[],
      pagelist:[],
      parent_category_id:'',
      category_id:'',
      title:'',
      allcheck:false,
      categroypanel:[],
      oldchecklist:[],
      checkdelegnth:0,
      dialog:false,
    }
  },
  computed: {
    //商品分类
    goodslist(){
      return this.$store.state.commodity.goodslist
    }
  },
  props:{
    categroyDialog:{
      type:Boolean,
      default:false
    },
    checklist:{
      type: Array,
      default() {
        return []
      }
    }
  },
  created(){

  },
  methods:{
    close() {
      BUS.$emit('close')
    },
    // 选择一页显示多少条
    sizeChange(size) {
      this.pageSize = size;
      this.getallCategroy()
    },
    // 选择页数
    pageChange(page) {
      this.currentPage = page,
      this.getallCategroy()
    },
    //取消商品选中
    notCheck(item,child){
      child.is_check="0"
      this.childcheck(item)
    },
    //全选
    checkAll(){
        this.checkdelegnth=0
        this.categroylist.map((item,i)=>{
             if(item.is_check!='2')
             item.is_check=this.allcheck ? '1':'0'
             item.spec_list.map((child,s)=>{
              if(this.allcheck=='1'){
                this.checkdelegnth++;
              }else{
                this.checkdelegnth=0;
              }
              if(child.is_check!='2')
              child.is_check=this.allcheck ? '1':'0'
             })
        })
    },
    //父级选中
    parentcheck(val,item,i){
       item.spec_list.map((child,i)=>{
           if(child.is_check!='2')
           child.is_check=val=='1' ? '1':'0'
       })
       this.Ischeckall()
    },
    //子级选中
    childcheck(item,val){
      let s=0
      item.spec_list.map((child,i)=>{
          if(child.is_check=='0'){
            s++
          }
      })
      item.is_check=s==0 ? '1':'0';
      this.Ischeckall()
    },
    //是否全部选中
    Ischeckall(){
      let s=0
      this.checkdelegnth=0;
      this.categroylist.map(item=>{
        if(item.is_check=='0'){
          s++
        }
        item.spec_list.map(child=>{
          if(child.is_check!=0){
            this.checkdelegnth++;
          }
        })
      })

      this.allcheck=s==0 ? true :false;
    },
    //获取商品
    getallCategroy(){
      var data={
        'parent_category_id':this.shopid.length>0 ? this.shopid[0]:'',
        'category_id':this.shopid.length>1 ? this.shopid[1]:'',
        'title':this.title,
        // 'p':this.currentPage,
        // 'pSize': this.pageSize
      }
      Ajax.post(LOAD+'/NewMenu/Goods/getSingleGoodsList',data).then(rs=>{
        if(rs.code==0){
         this.categroylist=rs.data.list;
         this.total=rs.data.total;
         this.categroylist.map((item,i)=>{
           item.is_check="0"
           item.spec_list.map((child,s)=>{
              child.is_check="0"
           })
         })
         this.categroylist=this.copy(this.categroylist)
         this.Ischeckall();
        }
      })
    },
    //
    edit(){
        this.oldchecklist=this.copy(this.checklist);
        this.total= this.oldchecklist.length;
        this.oldchecklist.map((item,i)=>{
          var s=0;
          item.spec_list.map((child,i)=>{
            if(child.is_check=='1'){
              child.is_check='2'
            }else{
              s++
            }
          })
          item.is_check= s == 0 ? '2':'0'
        })
        this.allcheck=false;
        this.categroylist=this.copy(this.oldchecklist);
        this.Ischeckall();
    },
    //提交
    submit(){
      BUS.$emit('submitcategroy',{'checkAll':this.categroylist});
      this.close()
    },
  },
  mounted(){
    BUS.$on('close',()=>{
      this.close();
    });
    var self=this
    BUS.$on('addDiogcatroy',()=>{
      if(self.checklist.length==0){
        this.getallCategroy();
      }else{
        this.edit();
      }
    })
  },
  watch:{
    categroyDialog(val){
      this.dialog=val;
    },
  }
}
</script>
