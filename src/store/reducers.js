import { combineReducers } from 'redux'

//移动端菜单是否关闭
import { reducer as header_menu } from '../components/store';

//首页加载
import { reducer as home_request } from '../view/Home/store';

//首页加载
import { reducer as everyday_request } from '../view/Everyday/store';

const reducer_app = combineReducers({
  //移动端头部
  mobile_menu: header_menu,

  //首页加载
  home: home_request,

  //每日一图
  everyday: everyday_request,
})


export default reducer_app;
