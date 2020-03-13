<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="loginUser"
        >
          <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-bind="email"
          />
          <!-- Password -->
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-bind="pass"
          />
          <p>
            Dont have an account??<router-link to="/register"
              >click here</router-link
            >
          </p>
          <!-- Sign in button -->
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" @click="login" type="submit">
              Sign in
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
    import router from "../../router"    
    import axios from "axios"    
    export default {    
        name: "Login",
        data:()=>({
          email:'',
          pass:''
        }),
        created:()=>{
          if(localStorage.token){
            router.push('/data');
          }
        },
        methods: {    
            login(){    
              let data = {    
                  email: this.email,    
                  password: this.pass    
              }
              axios.post("http://localhost:3000/api/signin", data)    
                  .then((response) => {    
                      console.log(response.data)
                      localStorage.token = response.data.token;
                      this.$store.commit('setLogged', true);
                      router.push("/data")    
                  })    
                  .catch((errors) => {    
                      console.log("Cannot log in")    
                  })     
            }    
        }    
    }
</script>