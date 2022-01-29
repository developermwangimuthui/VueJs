const app = Vue.createApp({
    data(){
        return{
            showCars: false,
            name : 'Ferari',
            location: 'Kenol',
            milage:20,
            cars:[
                {name :"Toyota",location:"Muranga",milage:"10"},
                {name :"Subaru",location:"Nairobi",milage:"30"},
                {name :"Nissan",location:"Mombasa",milage:"40"},
                {name :"Mazda",location:"Kisumu",milage:"40"}
            ],
        }
    },
    methods:{
        changeName(name){
            this.name = name
        },
        revealCars(showCars){
            if (this.showCars == true) {
                showCars = false
            } else {
                
                showCars = true
            }
            this.showCars = showCars
            console.log(showCars);
        },
        
       
    }
});
app.mount('#app');