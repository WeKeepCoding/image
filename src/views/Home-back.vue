<template>
  <div>
    <a-button type="primary" @click="aa">ss</a-button>
    <a-spin :spinning="spinning"></a-spin>
    <div class="home">
      <Tree
        ref="province"
        tree-type="area"
        :tree-data="areaData"
        :replace-fileds="replaceFileds"
        :defalut-checked-keys="areaSeclected"
        :defalut-expanded-keys="areaExpandedKeys"
        @seledtedKeysHandle="seledtedKeysHandle"
      />
      <Tree
        ref="BCD"
        tree-type="BCD"
        :tree-data="bcdData"
        :defalut-checked-keys="bcdSeclected"
        @seledtedKeysHandle="seledtedKeysHandle"
      />
      <Tree
        ref="DCD"
        tree-type="DCD"
        :tree-data="dcdData"
        :defalut-checked-keys="cdcSeclected"
        @seledtedKeysHandle="seledtedKeysHandle"
      />
    </div>
    <a-progress class="aaa" :percent="30" />
    <a-progress :percent="50" />
  </div>
</template>

<script>
// @ is an alias to /src
import Tree from "@/components/tree";
import { areaData, bcdData, dcdData } from "@/constant/const";
export default {
  name: "home",
  components: {
    Tree,
  },
  data() {
    return {
      spinning: false,
      // area
      replaceFileds: { children: "child", title: "name", key: "parentId" },
      // 渲染数据
      areaData: [],
      bcdData: [],
      dcdData: [],
      // 默认选中
      areaSeclected: ["1-11-111", "1-12-122"],
      bcdSeclected: [1],
      cdcSeclected: [2],
      // 默认展开
      areaExpandedKeys: ["11", "13"],
      // map数据
      areaMap: new Map(),
      BCDMap: new Map(),
      DCDMap: new Map(),
    };
  },
  created() {
    // 接口获取数据, 然后处理
    this.sourceDataHandle(areaData);
    this.sourceCDataHandle(bcdData, "BCDMap");
    this.sourceCDataHandle(dcdData, "DCDMap");

    this.areaData = areaData;
    this.bcdData = bcdData;
    this.dcdData = dcdData;
  },
  mounted() {},
  methods: {
    aa() {
      this.areaSeclected = this.areaSeclected.splice(
        0,
        this.areaSeclected.length - 1,
        ...["1-12", "1-13-132", "1-11-111"]
      );
      this.bcdSeclected = this.bcdSeclected.splice(
        0,
        this.bcdSeclected.length,
        ...[2, 3]
      );
      this.cdcSeclected = this.cdcSeclected.splice(
        0,
        this.cdcSeclected.length,
        ...[2, 3]
      );
    },
    // 数据初始化
    sourceDataHandle(sourceData, parentId) {
      sourceData.forEach((item) => {
        this.areaMap.set(item.id, item);
        if (item.id === "0") {
          item["parentId"] = 0;
        } else {
          // item["parentId"] = `${parentId}-${item.id}`;
          item["parentId"] = `${parentId ? `${parentId}-` : ""}${item.id}`;
        }
        if (item.child) {
          this.sourceDataHandle(item.child, item.parentId);
        }
      });
    },

    // 初始化
    sourceCDataHandle(sourceData, typeMap) {
      sourceData.forEach((item) => {
        this[typeMap].set(item.id, item);
      });
    },
    // 处理子组件传过来的选中数据
    seledtedKeysHandle(keys, type) {
      switch (type) {
        case "area":
          this.handleAreaResultData(keys);
          break;
        case "BCD":
          this.handleBCDResultData(keys);
          break;
        case "DCD":
          this.handleDCDResultData(keys);
          break;
        default:
          console.log(keys);
      }
    },
    // 处理area提交时数据
    handleAreaResultData(data) {
      const resultData = data.map((item) => {
        const [provinceId, cityId, countryId] = item.split("-");
        return {
          provinceId,
          provincename: this.areaMap.get(provinceId).name,
          cityId,
          cityname: cityId ? this.areaMap.get(cityId).name : "",
          countryId,
          countryname: countryId ? this.areaMap.get(countryId).name : "",
        };
      });
      console.log(resultData);
    },
    // 处理BCD DCD提交时数据
    handleBCDResultData(data) {
      const resultData = data.map((item) => {
        return {
          id: item,
          name: this.BCDMap.get(item).name,
        };
      });
      console.log(resultData);
    },
    handleDCDResultData(data) {
      const resultData = data.map((item) => {
        return {
          id: item,
          name: this.DCDMap.get(item).name,
        };
      });
      console.log(resultData);
    },
  },
};
</script>
<style>
.home {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.aaa .ant-progress-outer {
  transform: rotate(180deg) !important;
  margin-right: calc(-2em + 8px);
  padding-right: calc(2em + 8px);
}
</style>
