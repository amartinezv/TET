<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
        >
          <input
            type="text"
            id="name"
            class="form-control mb-5"
            placeholder="Name"
            v-model="name"
            required
          />
          <input
            type="email"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="email"
            required
          />
          <!-- Password -->
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="pass"
          />
          <p>
            Already have an account??<router-link to="/login"
              >click here</router-link
            >
            <!-- Sign in button -->
            <center>
              <button class="btn btn-primary btn-block w-75 my-4"  @click="signup" type="submit">
                Sign up
              </button>
            </center>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
    import router from "../../router"    
    import axios from "axios"    
    export default {    
        name: "signup",
        data:()=>({
          name:'',
          email:'',
          pass:''
        }),
        created:()=>{
          if(localStorage.token){
            router.push('/data');
          }
        },
        methods: {    
            signup(){    
              let data = {
                  email: this.email,    
                  displayName: this.name,
                  password: this.pass    
              }
              axios.post("http://localhost:3000/api/signup", data)    
                  .then((response) => {    
                      console.log(response.data)
                      alert("Usuario creado");
                      router.push("/login")
                  })
                  .catch((errors) => {    
                    alert('Error creando usuario')
                      console.log("Cannot log in")    
                  })     
            }    
        }    
    }
</script>