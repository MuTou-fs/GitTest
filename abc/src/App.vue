<template>
  <div id="app">
    <Layout>
      <myHeader></myHeader>
      <myContent></myContent>
      <Divider :style="{color: red}"></Divider>
      <myFooter></myFooter>
    </Layout>

    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.ivu-layout {
  height: 100%;
  align-items: center;
  background-color: rgb(140, 245, 196);
}

.ivu-layout-header,.ivu-layout-content,.ivu-layout-footer {
  margin: 0;
  border: 0;
  padding: 0;
  width: 1200px;
  text-align: center;
}
.ivu-layout-header {
 
}
.ivu-layout-content {

}

.ivu-layout-footer {
  height: 54px;
}

.ivu-divider{
 padding: 1.5px;
}
</style>
