<template>
    <div id="home-header" class="home-header">
        <el-row class="header">
            <el-col :span="4">
                <div class="grid-content">
                    <router-link :to="{path:'/'}" class="blog-name" tag="h3" title="点击返回首页">LoginErr的个人博客</router-link>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content">
                    <div class="classifies">
                        <router-link :to="{path:'/',query:{articletype:classify.categoryName}}" v-for="(classify,index) in getCategory" :key="index" class="curr-classify" tag="span">{{classify.categoryName}}</router-link>
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div v-show="!isLogin" class="grid-content login-register">
                    <router-link :to="{name:'loginlink'}" class="login blog-enter" tag="span">登录</router-link> |
                    <router-link :to="{name:'registerlink'}" class="register blog-enter" tag="span">注册</router-link>
                </div>
                <div v-show="isLogin" class="logined">
                    <user-info></user-info>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import UserInfo from '@/components/UserInfo'
    export default {
        name: "HomeHeader",
        data() {
            return {
                isAdmin:false,
                isLogin:false,
                username:'无名氏'
            }
        },
        components:{
            UserInfo
        },
        computed:{
            getCategory(){
                return this.$store.state.category
            }
        },
        created(){
            let userInfo = localStorage.getItem('username');
            if(userInfo){
                this.isLogin = true;
                this.username = userInfo;
                return;
            }
        }
    }
</script>

<style lang="less" scoped>
    .home-header{
        position: fixed;
        z-index: 99;
        width: 100%;
        height: 80px;
        background-color: #667ed3;
        color: #fff;
        .header{
            display: flex;
            width: 1370px;
            height: 100%;
            margin: 0 auto;
            align-items: center;
            .grid-content {
                height: 100%;
                background-color: #667ed3;
                .blog-name,
                .blog-enter{
                    height: 36px;
                    line-height: 36px;
                    font-size: 20px;
                }
            }
            .el-col-16{
                display: flex;
                justify-content: left;
                padding-left: 50px;
            }
            .el-col{
                .classifies{
                    max-height: 80px;
                    overflow: hidden;
                    .curr-classify{
                        display: inline-block;
                        height: 100%;
                        line-height: 80px;
                        padding: 0 20px;
                        cursor: pointer;
                    }
                    .curr-classify:first-child{
                        padding-left: 0;
                    }
                    .curr-classify:hover{
                        color: #00c1de;
                    }
                }
            }
            .el-col-4{
                .blog-enter{
                    display: inline-block;
                    padding: 0 8px;
                    cursor: pointer;
                }
            }
            .el-col-4{
                .login-register{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-left: 70px;
                }
                .logined{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .user-name{
                        font-size: 18px;
                    }
                    .admin{
                        width: 74px;
                        display: inline-block;
                        margin-left:40px;
                        font-size: 12px;
                        font-weight: 300;
                        border-bottom: 1px solid #fff;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
