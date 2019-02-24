<template>
    <div class="home">
        <div class="banner"></div>
        <!-- 互联网营销 -->
        <el-row class="simple" type="flex">
            <el-col :span="6" class="simple_left">
                <span class="simple_title">互联网营销</span>
                <span class="simple_bar">店铺运营BANNER</span>
            </el-col>
            <el-col :span="6" class="hide">1</el-col>
            <el-col :span="6" class="hide">2</el-col>
            <el-col :span="6" class="simple_right">
               <span class="more">
					<a href="#">查看更多</a>
				</span>
				<a href="#">
					<img class="simple_icon" src="../assets/img/simple_icon1.png"/>
				</a>
				<a href="#">
					<img class="simple_icon" src="../assets/img/simple_icon2.png"/>	
				</a>
				<a href="#">
					<img class="simple_icon" src="../assets/img/simple_icon3.png"/>
				</a>
            </el-col>
        </el-row>
        <ul class="simple_list_img">
            <el-row type="flex">
                <el-col :span="6">
                    <img src="../assets/img/simple-img (1).png">
                </el-col>
                <el-col :span="6">
                    <img src="../assets/img/simple-img (2).png">
                </el-col>
                <el-col :span="6">
                    <img src="../assets/img/simple-img (3).png">
                </el-col>
                <el-col :span="6">
                    <img src="../assets/img/simple-img (4).png">
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <img src="../assets/img/simple-img (1).png">
                </el-col>
                <el-col :span="6">
                    <img src="../assets/img/simple-img (2).png">
                </el-col>
                <el-col :span="6">
                    <img src="../assets/img/simple-img (3).png">
                </el-col>
                <el-col :span="6">
                    <img src="../assets/img/simple-img (4).png">
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <img src="../assets/img/simple-img (1).png">
                </el-col>
                <el-col :span="6">
                    <img src="../assets/img/simple-img (2).png">
                </el-col>
                <el-col :span="6">
                    <img src="../assets/img/simple-img (3).png">
                </el-col>
                <el-col :span="6">
                    <img src="../assets/img/simple-img (4).png">
                </el-col>
            </el-row>
            <el-row class="cut_off_rule"></el-row>
        </ul>
        <!-- 品牌VI系统 -->
        <el-row class="simple" type="flex">
            <el-col :span="3" class="simple_left">
                <span class="simple_title">品牌VI系统</span>
            </el-col>
            <el-col :span="12" class="simple_left">
                 <span class="simple_bar simple_nav">海报单页</span>
                 <span class="simple_bar simple_nav active">折页</span>
                 <span class="simple_bar simple_nav">易拉宝</span>
                 <span class="simple_bar simple_nav">请柬</span>
                 <span class="simple_bar simple_nav">菜单</span>
                 <span class="simple_bar simple_nav">台卡</span>
            </el-col>
            <el-col :span="3" class="hide">2</el-col>
            <el-col :span="6" class="simple_right">
               <span class="more">
					<a href="#">查看更多</a>
				</span>
				<a href="#">
					<img class="simple_icon" src="../assets/img/simple_icon1.png"/>
				</a>
				<a href="#">
					<img class="simple_icon" src="../assets/img/simple_icon2.png"/>	
				</a>
				<a href="#">
					<img class="simple_icon" src="../assets/img/simple_icon3.png"/>
				</a>
            </el-col>
        </el-row>
        <ul class="simple_list_img">
            <el-row type="flex">
                <el-col :span="6">
                    <img src="../assets/img/brand system (1).png">
                </el-col>
                 <el-col :span="6">
                    <img src="../assets/img/brand system (2).png">
                </el-col>
                 <el-col :span="6">
                    <img src="../assets/img/brand system (3).png">
                </el-col>
                 <el-col :span="6">
                    <img src="../assets/img/brand system (4).png">
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <img src="../assets/img/brand system (5).png">
                </el-col>
                 <el-col :span="6">
                    <img src="../assets/img/brand system (6).png">
                </el-col>
                 <el-col :span="6">
                    <img src="../assets/img/brand system (7).png">
                </el-col>
                 <el-col :span="6">
                    <img src="../assets/img/brand system (8).png">
                </el-col>
            </el-row>
            <el-row type="flex">
                <el-col :span="6">
                    <img src="../assets/img/brand system (9).png">
                </el-col>
                 <el-col :span="6">
                    <img src="../assets/img/brand system (10).png">
                </el-col>
                 <el-col :span="6">
                    <img src="../assets/img/brand system (11).png">
                </el-col>
                 <el-col :span="6">
                    <img src="../assets/img/brand system (12).png">
                </el-col>
            </el-row>
            <el-row class="cut_off_rule botmar"></el-row>
        </ul>
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
        /* width: 100%; */
        min-width: 1100px;
    }
    h1{
        color: aqua;
    }
    .hide{
        opacity:0;
    }
    .banner{
        width: 100%;
        height: 372px;
        background: url(../assets/img/banner.png) no-repeat center center/100% 100%;
    }
    .simple{
        width: 1028px;
        height: 45px;
        margin: 30px auto;
	    line-height: 45px;
    }
     .simple_left{
        text-align: left;
        margin-left: 11px;
    }
    .simple_title{
        font-size: 18px;
        margin-right: 20px;
    }
    .simple_bar{
        font-size: 13px;
        color: #d2d2d2;
    }
    .simple_nav{
        margin-right: 30px;
    }
    .active{
        color: #0BD5D4;
    }
    .simple_right{
        text-align: right;
        margin-right: 11px;
    }
    .more a{
        display: inline-block;
        width:64px;
        height:23px;
        border:1px solid #919191;
        line-height: 23px;
        text-align: center;
        border-radius:32px;
        font-size: 11px;
        color: #444;
    }
    .simple_icon{
        vertical-align: middle;
        margin-left: 10px;
    }
    /* 模板列表 */
    .simple_list_img{
        width: 1028px;
        height: auto;
        margin: 0 auto;
    }
    .cut_off_rule{
        width: 1006px;
        height: 1px;
        margin: 0 auto;
        margin-top: 30px;
        background: #ddd;
    }
    .botmar{
        margin-bottom:30px; 
    }
</style>