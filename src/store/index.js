import { createStore } from 'vuex'
const dataUrl = 'https://tlcgeyer.github.io/vue-portfolioData/data/'
export default createStore({
  state: {
    jobTitle: null, //defining varibales
    education: null,
    about: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {

  },
  mutations: {
    setJobTitle(state, value) {
      //two arguments 
      state.jobTitle = value 
    },
    setAbout(state, value) {
      //two arguments 
      state.about = value 
    },
    setEducation(state, value) {
      //two arguments 
      state.education = value 
    },
    setSkills(state, value) {
      //two arguments 
      state.education = value 
    }
  },
  actions: {
    async fetchJobTitle(context) {
      let res = await fetch(dataUrl)
      let {jobTitle} = await res.json()
      context.commit('setJobTitle', jobTitle)
    }
  },
  modules: {
  }
})
