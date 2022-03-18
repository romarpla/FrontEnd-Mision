import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    color: "blue"
  },
  getters: {
    contadorCuadrado(state) {
      return state.counter * state.counter;
    }
  },
  mutations: {
    subirContador(state, random){
      state.counter += random;
    },
    bajarContador(state, random){
      state.counter -= random;
    },
    colorChange(state, color) {
      state.color = color;
    }
  },
  actions: {
    async subirContador() { 
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results)
      this.commit("subirContador", results);
    },
    async bajarContador() { 
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results)
      this.commit("bajarContador", results);
    },
    colorChange({commit}, color) {
      commit("colorChange", color);
    }
  },
  modules: {
  }
})
