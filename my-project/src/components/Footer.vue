<template>
    <div class="footer">
        <el-row class="footer_nav">
            <el-col :span="7">
                <div class="hide">123</div>
            </el-col>
            <el-col :span="2">
                    <li>
                        <a href="">关于我们</a>
                    </li>
            </el-col>
            <el-col :span="2">
                    <li>
                        <a href="">友情链接</a>
                    </li>
            </el-col>
            <el-col :span="2">
                    <li>
                        <a href="">个人版会员</a>
                    </li>
            </el-col>
            <el-col :span="2">
                    <li>
                        <a href="">隐私协议</a>
                    </li>
            </el-col>
            <el-col :span="2">
                    <li>
                        <a href="">服务条款</a>
                    </li>
            </el-col>
            <el-col :span="7">
                <div class="hide">123</div>
            </el-col>
        </el-row>
         <el-row class="footer_nav_two">
            <el-col :span="7">
                <div class="hide">123</div>
            </el-col>
            <el-col :span="2">
                    <li>
                        <a href="">免费声明</a>
                    </li>
            </el-col>
            <el-col :span="2">
                    <li>
                        <a href="">联系我们</a>
                    </li>
            </el-col>
            <el-col :span="2">
                    <li>
                        <a href="">企业协作版</a>
                    </li>
            </el-col>
            <el-col :span="2">
                    <li>
                        <a href="">加入我们</a>
                    </li>
            </el-col>
            <el-col :span="2">
                    <li>
                        <a href="">使用条款</a>
                    </li>
            </el-col>
            <el-col :span="7">
                <div class="hide">123</div>
            </el-col>
        </el-row>
        <el-row class="long_line"></el-row>
        <el-row id="small_size">
            <el-col :span="9" class="hide">123</el-col>
            <el-col :span="1">
                <li><a href="">售后服务</a></li>
            </el-col>
            <el-col :span="1">
                <li><a href="">关于我们</a></li>
            </el-col>
            <el-col :span="1">
                <li><a href="">联系我们</a></li>
            </el-col>
            <el-col :span="1">
                <li><a href="">加入我们</a></li>
            </el-col>
            <el-col :span="2">
                <li><a href="">copyright@2018</a></li>
            </el-col>
            <el-col :span="9" class="hide">123</el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return{}
    }
}
</script>
<style scoped>
    li{
        list-style: none;
    }
    li a{
        color: #d2d2d2;
        font-size: 13px;
    }
    .footer{
        width: 100%;
        min-width: 1100px;
        height: auto;
        background: #f8f8f8;
    }
    .hide{
        opacity:0;
    }
    .footer_nav{
        padding-top: 20px;
    }
    .long_line{
        width: 100%;
        background: #d2d2d2;
        height: 0.5px;
    }
    .footer_nav_two{
        padding-top:10px;
        padding-bottom: 20px;
    }
    #small_size li a{
        font-size: 11px;
        padding-bottom: 10px;
    }
</style>