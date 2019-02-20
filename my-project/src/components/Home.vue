<template>
    <div class="home">
        <el-row>
            <el-col :span="2"><div class="grid-content hide">1</div></el-col>
            <el-col :span="1">
                <div class="grid-content">
                    <img class="logo" src="../assets/img/logo.png">
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content">
                    <h5 class="logo-size">海图创域</h5>
                </div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content">
                    <h6 class="left-size">让设计师赋能中小企业</h6>
                </div>
            </el-col>
            <el-col :span="4"><div class="grid-content hide">7</div></el-col>
            <el-col :span="2">
                <div class="grid-content">
                    <el-button round size="small" class="blod_size">&nbsp;&nbsp;&nbsp;首&nbsp;页&nbsp;&nbsp;&nbsp;</el-button>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content">
                    <!-- <el-button round size="small">模板中心</el-button> -->
                    <span style="color:#fff; font-size:12px;" class="masterplate">模板中心</span>
                </div>
            </el-col>
            <el-col :span="3"><div class="grid-content hide">110</div></el-col>
            <el-col :span="2">
                <div class="grid-content">
                    <a href="">
                        <span class="nav_bar">VIP特权</span>
                    </a>
                </div>
            </el-col>
            <el-col :span="1">
                <div class="grid-content">
                    <a href="">
                        <span class="nav_bar">我的作品</span>
                    </a>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content">
                    <a href="">
                        <img class="head_portrait" src="../assets/img/head_portrait.png">   
                    </a>
                </div>
            </el-col>
        </el-row>
        <div class="banner"></div>
    </div>
</template>
<script> 
export default {
    name:'Home',
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    .home{
        width: 100%;
        min-width: 1100px;
    }
    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td, a, span, img {
        margin: 0;
        padding: 0;
        word-break: break-all;
        text-shadow: none;
    }
    a{
        text-decoration:none;
    }
    h1{
        color: aqua;
    }
    .hide{
        opacity:0;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple{
        background: #d3dce6;
    }
    .bg-purple-success{
        background: green;
    }
    .bg-purple-warn{
        background:orange;
    }
    .el-row{
        height:70px;
        line-height: 70px;
        background-color:#1c3254;
    }
    .logo{
        margin-top:5px;
    }
    .logo-size{
        font-size:24px;
    }
    .left-size{
        text-align:left;
        font-size:14px;
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
        margin: 10px 0 0 30px;
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
    .banner{
        width: 100%;
        height: 272px;
        background: url(../assets/img/banner.png) no-repeat center center/100% 100%;
    }
</style>