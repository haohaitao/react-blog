import * as constans from './constans'
import * as http from '../../../common/http'

//改变加载状态
export const spinState = (value,page) => ({
  type: constans.SPIN_STATE,
  value,
  page
})

//拿到数据
export const getData = () => {
  return (dispatch) =>{
      dispatch(spinState(true,1))
      http.getJson('/api/wp-json/wp/v2/posts?per_page=10','','').then( (res)=> {
        if(res.status === 200){
          res.data.forEach(item => {
            item.title = item.title.rendered
            item.excerpt = item.excerpt.rendered
          })
            dispatch(save_data(res))
            dispatch(spinState(false,1))
        }
      })
  }
}

//存接口的数据
export const save_data = (data) => ({
  type: constans.SAVE_DATA,
  data,
  total:data
})

//分页
export const change_page = (page) => {
  return dispatch =>{
      dispatch(spinState(true,page)) //改变加载状态
      http.getJson('/api/wp-json/wp/v2/posts?per_page=10&page=' + page,'','').then( (res)=> {
        res.data.forEach((item)=>{
          item.title = item.title.rendered
          item.excerpt = item.excerpt.rendered
        })
        dispatch(save_data(res))
        dispatch(spinState(false,page))
    })

    }
}