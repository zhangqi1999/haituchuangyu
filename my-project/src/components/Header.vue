<template>
    <div class="header">
        <el-row class="nav">
            <el-col :span="3"><div class="hide">1</div></el-col>
            <el-col :span="1">
                    <img class="logo" src="../assets/img/logo.png">
            </el-col>
            <el-col :span="5" class="logo_size_left">
                    <span class="logo-size">海图创域</span>
                    <span class="left-size">让设计师赋能中小企业</span>
            </el-col>
            <el-col :span="3"><div class="hide">7</div></el-col>
            <el-col :span="2">
                    <el-button round size="small" class="blod_size">&nbsp;&nbsp;&nbsp;首&nbsp;页&nbsp;&nbsp;&nbsp;</el-button>
            </el-col>
            <el-col :span="2">
                <div>
                    <span style="color:#fff; font-size:12px;" class="masterplate">模板中心</span>
                </div>
            </el-col>
            <el-col :span="3"><div class="hide">110</div></el-col>
            <el-col :span="4">
               <a href="">
                    <span class="nav_bar">VIP特权</span>
                </a>
                <a href="">
                    <span class="nav_bar right">我的作品</span>
                </a>
            </el-col>
            <el-col :span="1">
                    <a href="">
                        <img class="head_portrait" src="../assets/img/head_portrait.png">   
                    </a>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name:'Header',
        data() {
            return {
                
            }
        },
    }
</script>
<style scoped>
    h1{
        color: aqua;
    }
    .header{
        /* width: 100%; */
        min-width: 1100px;
    }
    .hide{
        opacity:0;
    }
     .nav{
        height:70px;
        line-height: 70px;
        background-color:#1c3254;
    }
    .logo{
        margin-top:5px;
    }
    .logo-size{
        font-size:20px;
    }
    .logo_size_left{
        text-align: left;
    }
    .left-size{
        text-align:left;
        font-size:12px;
        font-weight: normal;
        margin-left: 5px;
        line-height: 75px;
    }
    .left-size,.logo-size{
        color: #fff;
    }
    .el-button{
        color: #444;
    }
    .blod_size{
        font-weight: 600;
    }
     .el-button:hover{
        color: #409EFF;
    }
    .nav_bar{
        display: inline-block;
        width: 72px;
        height: 28px;
        border-radius: 20px;
        line-height:28px;
        color: #fff;
        font-size: 12px;
        white-space: nowrap;
        cursor: pointer;
        border: 1px solid #fff;
        
    }
    .right{
        margin-left: 10px;
    }
    .masterplate:hover{
        display: inline-block;
        padding: 10px 15px;
        border-radius: 20px;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        color: #409EFF !important;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    .head_portrait{
       margin-top: 10px;
    }
</style>