<style lang="scss">
  @import '../../assets/css/abstract';
  .el-pagination--small button,.el-pagination--small span{
    line-height: 22px;
    height: 22px;
  }
  .el-pagination--small .el-pagination__editor{
    padding: 0;
  }
  .el-pagination--small .btn-next, .el-pagination--small .btn-prev, .el-pagination--small .el-pager li, .el-pagination--small .el-pager li:last-child{
    line-height: 16px;
    height: 18px;
    min-width: 18px;
  }
  .el-pagination--small .el-pager li.active {
    border-color: #4C5863;
    background-color: #4C5863;
    border-radius: 11px;
  }
  .el-pagination--small .el-input {
    background: white;
  }
  .el-pagination--small .el-select .el-input input {
    padding:0 10px;
    height:22px;
    line-height: 22px;
  }
  .table-panel{
    background: white;
    margin-top:20px;
  }
  .table-panel-title{
    padding:10px 20px;
  }
  .table-title{
    color:$c-blue;
  }
</style>
<template>
  <div class="table-panel panel" style="overflow:visible">
    <div class="table-panel-title flex type1">
      <div class="table-title flex type1">
        <slot name="left"></slot>
      </div>
      <div class="table-title-handle">
        <slot name="right"></slot>
      </div>
    </div>
    <div style="padding:0 20px 20px">
      <slot name="table"></slot>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>
