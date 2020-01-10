import axios from 'axios'

function request(host,uri,method,data){
    if(!data) data={}

    let r_url = (host) ? (host+uri) : uri
    return axios({
        method:method,
        url:r_url,
        data:data,
        crossDomain: true,
        headers:{
            "Content-Type":'application/json',
            "Accept":"application/json",
        }
    })
}

export function postJson(uri,data,host){
    return request(host,uri,'post',data)
}
export function getJson(uri,data,host){
    return request(host,uri,'get',data)
}