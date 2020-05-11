import * as constants  from './constans'

const stateDefault = {
  loading_state:true,
  listData:[
    {
      title: '',
      excerpt: 'Loading...',
      id: '',
      content_first_image: '',
      date: '1970-01-01',
      pageviews: 0,
      total_comments: 0,
    },
    {
      title: '',
      excerpt: 'Loading...',
      id: '',
      content_first_image: '',
      date: '1970-01-01',
      pageviews: 0,
      total_comments: 0,
    },
    {
      title: '',
      excerpt: 'Loading...',
      id: '',
      content_first_image: '',
      date: '1970-01-01',
      pageviews: 0,
      total_comments: 0,
    },
    {
      title: '',
      excerpt: 'Loading...',
      id: '',
      content_first_image: '',
      date: '1970-01-01',
      pageviews: 0,
      total_comments: 0,
    },
    {
      title: '',
      excerpt: 'Loading...',
      id: '',
      content_first_image: '',
      date: '1970-01-01',
      pageviews: 0,
      total_comments: 0,
    },
    {
      title: '',
      excerpt: 'Loading...',
      id: '',
      content_first_image: '',
      date: '1970-01-01',
      pageviews: 0,
      total_comments: 0,
    },
    {
      title: '',
      excerpt: 'Loading...',
      id: '',
      content_first_image: '',
      date: '1970-01-01',
      pageviews: 0,
      total_comments: 0,
    },
    {
      title: '',
      excerpt: 'Loading...',
      id: '',
      content_first_image: '',
      date: '1970-01-01',
      pageviews: 0,
      total_comments: 0,
    },
    {
      title: '',
      excerpt: 'Loading...',
      id: '',
      content_first_image: '',
      date: '1970-01-01',
      pageviews: 0,
      total_comments: 0,
    },
    {
      title: '',
      excerpt: 'Loading...',
      id: '',
      content_first_image: '',
      date: '1970-01-01',
      pageviews: 0,
      total_comments: 0,
    }
  ], //默认数据
  total:0, //列表总数
  page:1, //默认第一页
}

export default (state=stateDefault,action)=>{
  const newState = JSON.parse(JSON.stringify(state))//深拷贝state
  switch(action.type){
    case constants.SPIN_STATE:
      newState.loading_state = action.value;
      newState.page = action.page;
      return newState;
    case constants.SAVE_DATA:
      newState.listData = action.data.data;
      newState.total = parseInt(action.data.headers["x-wp-total"]);
      return newState;
    default:
      return state;
  }
}
