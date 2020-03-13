<template>
    <div class="container">
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Latitud</th>
            <th scope="col">Longitud</th>
            <th scope="col">Humedad</th>
            <th scope="col">Temperatura</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in datos.dato" :key="index">
            <td>{{item.latitud}}</td>
            <td>{{item.longitud}} </td>
            <td>{{item.humedad}} </td>
            <td>{{item.temperatura}} </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import router from '../router';
export default {
    data:()=>({
        datos:[],
        holi:'holi'
    }),
    created(){
        if(localStorage.token){
            this.listarDatos();
        }
        else{
            router.push('/login');
        }
    },
    methods: {
        listarDatos(){
            this.axios.get('data')
            .then((response) =>{
                this.datos = response.data;
            })
            .catch(e => {
                console.log(e.response);
            })
        }
    }
}
</script>