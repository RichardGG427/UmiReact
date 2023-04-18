import axios from 'axios';


//调接口，本应该写在servicer
function getGoods(){
    return axios.get('/api/goods')
}

export default {
    namespace: "goods", // model的命名空间，区分多个model
    state: [], // 初始状态
    effects: {// 异步操作
        *getList(action,{call,put}){
            const res=yield call(getGoods)
            yield put({type:'initGoods',payload:res.data.result})
        }
    },
    reducers: {
        initGoods(state,action){
            return action.payload
        },
        //add good
        addGood(state,action){
            return [...state,{title:action.payload.title}]
        }
    }
   };