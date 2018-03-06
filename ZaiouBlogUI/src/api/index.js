import Vue from 'vue';
//引入axios
import Axios from 'axios'

// 通过process.env.NODE_ENV配置开发还是线上环境
console.log(process.env.NODE_ENV);

let path = (process.env.NODE_ENV === "development")
    ?"http://localhost:8081/"
    :"/api/";

let getApiUrl = (apiName)=>{
    return path + apiName
};

// let payMoney = (orderNo) =>{
//     window.open(path+'finance/deposit?orderNo='+orderNo);
// };

export default {
    // payMoney:payMoney,'

    //接口名字和接口参数 
    get:(apiName="",params={})=>{
        let apiUrl = getApiUrl(apiName);
        console.log(apiUrl);
        console.log(this.$http);
        return Axios.get(apiUrl,{params:params}).then((e)=>{
            return e.data;
        });
    },
    
    getmoney:()=>{
        // Vue.http.get("http://172.30.34.121:8080/aliApi/directPay?totalFee=0.01");
    },
    
    // post:(apiName="",body={})=>{
    //     let apiUrl = getApiUrl(apiName);
    //     console.log(apiUrl)
    //     return Vue.http.post(apiUrl,body).then((e)=>{
    //         return e.data;
    //     });
    // }
};