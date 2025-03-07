<template>
    <footer class="footer">
        <div class="footer-content">
            <!-- 左侧 - 自强STUDIO信息 -->
            <div class="footer-section studio-info">
                <h2>自强STUDIO</h2>
                <p>地址：湖北省武汉大学本科生院北402</p>
                <p>邮箱：xxxxxxxx@gmail.com</p>
                <div class="social-icons">
                    <i class="fab fa-weibo"></i>
                    <i class="fab fa-wechat"></i>
                    <i class="fab fa-twitter"></i>
                </div>
            </div>

            <!-- 中间 - 关于我们 -->
            <div class="footer-section">
                <h3>关于我们</h3>
                <ul>
                    <li><router-link to="/about">自强历史</router-link></li>
                    <!-- <li><a href="">加入我们</a></li> -->
                </ul>
            </div>

            <!-- 右侧 - 服务范围 -->
            <div class="footer-section">
                <h3>服务范围</h3>
                <ul>
                    <li><router-link to="/news">新闻动态</router-link></li>
                    <li><router-link to="/products">产品活动</router-link></li>
                </ul>
            </div>
        </div>
    </footer>
</template>
  
<style scoped>
.footer {
    width: 100%;
    position: relative;
    background-color: #353E41;
    /* 深色背景 */
    color: white;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
}

.footer-section {
    flex: 1;
}

.studio-info h2 {
    font-size: 1.5em;
}

.studio-info p {
    font-size: 1em;
    margin: 5px 0;
}

.social-icons {
    display: flex;
    gap: 15px;
    margin-top: 10px;
}

.social-icons i {
    font-size: 1.5em;
    cursor: pointer;
    transition: color 0.3s;
}

.social-icons i:hover {
    color: #6ec1e4;
}

.footer-section h3 {
    font-size: 1.3em;
    margin-bottom: 10px;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section li {
    margin: 5px 0;
}

.footer-section a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #6ec1e4;
}
</style>
  