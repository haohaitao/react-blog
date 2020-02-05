import React from 'react';
import Home from './view/Home';
import About from './view/About';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
// 页头页脚和侧边栏通用组件
import Header from './components/Header'
import Footer from './components/Footer';

function router() {
  return (
    <Router>
       <Header />
         <Switch>
            <Route exact path="/" component={Home} />  {/*首页*/}
            <Route exact path="/page/:page" component={Home} />  {/*首页*/}
            <Route exact path="/about" component={About} />  {/*关于我们*/}
            <Route exact path="/err" component={NotFound} />{/*404页面*/}
            {/* 如果匹配到以上路由将渲染路由，否则重定向404 */}
            <Redirect to="/err" />
         </Switch>
       <Footer />
    </Router>);
}

export default router;