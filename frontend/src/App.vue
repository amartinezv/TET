<template>
  <div id="app">
    <div id="nav" v-if="isLogged">
      <button class="float-right btn btn-primary" @click="logout">Cerrar Sesion</button>
    </div>
    <br>
    <router-view/>
  </div>
</template>

<script>
  export default{
    created(){
      if(localStorage.token){
        this.$store.commit('setLogged',true);
      }
    },
    computed:{
      isLogged(){
        return this.$store.state.logged;
      }
    },
    methods:{
      logout(){
        delete localStorage.token;
        this.$store.commit('setLogged', false);
        this.$router.push('/login');
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
