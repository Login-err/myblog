import Axios from 'axios';

/*
* 用户id
* */
const userId = (username) => {
    return Axios.post('/api/admin/userId', username);
}


/*
* 用户登录
* */
const login = (userinfo) => {
    return Axios.post('/api/admin/login', userinfo);
};
/*
* 获取文章列表
* value：{
*   page：第几页
*   count：每页几条消息
* }
* */
const getArticleList = (value) => {
    return Axios.post('/api/index/getArticleLists', value);
};
/*
*  获取分类标签里面的第一个
*
* */
const getFirstCategoryArcticle = (categoryName, value) => {
    const { count, page } = { value };
    return Axios.post(`/api/index/getCategoryArticles?articletype=${categoryName}`, { count, page });
};
const getCategory = (articletype, count) => {
    return Axios.post(`/api/index/getCategoryArticles?articletype=${articletype}`, { count });
};

// 用户评论提交
const commitComment = (value) => {
    return Axios.post('/api/index/commitComment', value);
};

// 获取用户评论
const getComment = (id) => {
    return Axios.post('/api/index/releaseComment', id);
};

// 回复框初始化
const toSupport = (articleId, userId) => {
    return Axios.post('/api/index/toSupport', { articleId, userId });
};

// 回复框初始化
const toCancelSupport = (articleId, userId) => {
    return Axios.post('/api/index/toCancelSupport', { articleId, userId });
};
// 获取首页的文章
const getCategoryArticles = (articletype, count) => {
    return Axios.post(`/api/index/getCategoryArticles?articletype=${articletype}`, { count });
};
export {
    login,
    getArticleList,
    getCategory,
    getFirstCategoryArcticle,
    commitComment,
    toSupport,
    toCancelSupport,
    getComment,
    getCategoryArticles
};
