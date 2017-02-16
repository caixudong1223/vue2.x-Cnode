import axios from 'axios'

// api 路径
const HOST = 'https://cnodejs.org/api/v1'

export function fetch(url, method='GET') {
  return new Promise((resolve, reject)=> {
    // axios.get(HOST + url)
    //     .then(response => {
    //       resolve(response.data);
    //     })
    //     .catch((error) => {
    //        reject(error)
    //     })
    axios({
      method:method,
      url: HOST + url,
    //params:params
    })
    .then((response) => {
        resolve(response.data)
    })
    .catch((error) => {
        reject(error)
    })
  })
}

export default {
    
    /**
     * 用户登陆
     * @param {any} accesstoken 
     * @returns
     */
    Login (accesstoken) {
        return fetch(`/accesstoken?accesstoken=${accesstoken}`,'post')
    },
    
    /**
     * 获取文章列表
     * @param {any} params
     * @returns
     */
    TopicsList (params) {
        return fetch(`/topics/${params}`)
    },
    
    /**
     * 获取文章详情
     * @param {any} id 参数id
     * @returns
     */
    TopicsDetail(id){
        return fetch(`/topic/${id}`)
    }

}