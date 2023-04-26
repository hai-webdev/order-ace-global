import getList from "@/api/getList";
import getContent from "@/api/getContent";
const state = {
    infoList:[],
    contact:{}
}
const mutations = {
    GET_INFO(state, payload){
        state.infoList = payload;
    },
    GET_CONTACT(state, payload){
        state.contact = payload;
    }
}
const actions = {
    async getInfo(ctx){
        const resp = await getList({scode:9});
        ctx.commit("GET_INFO", resp.data);
    },
    async getContact(ctx){
        const resp = await getContent({scode:10});
        ctx.commit("GET_CONTACT", resp.data);
    }
}



export default {
  namespaced: true,
  state,
  mutations,
  actions
}
