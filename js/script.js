const {createApp} = Vue;

createApp({
    data(){
        return{
            todoList:[
                {
                   text: "cucinare",
                   done: false
                },
                {
                    text: "bere",
                    done: false
                 },
                 {
                    text: "mangiare",
                    done: true
                 },
                 {
                    text: "salutare",
                    done: false
                 },
                 {
                    text: "portare a spasso il cammello" ,
                    done: true
                 },
            ]
        }
    },
    methods: {
        
    },
}).mount('#app');