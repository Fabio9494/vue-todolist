const {createApp} = Vue;

createApp({
    data(){
        return{
            
            todoList:[
                {
                   text: "cucinare",
                   done: false,
                },
                {
                    text: "bere",
                    done: false,
                 },
                 {
                    text: "mangiare",
                    done: false,
                 },
                 {
                    text: "salutare",
                    done: false,
                 },
                 {
                    text: "portare a spasso il cammello" ,
                    done: false,
                 },
            ]
        }
    },
    methods: {
        check(i){
            if(!this.todoList[i].done){
                this.todoList[i].done=true;
            }
        },
        removeItem(i){
            let conf = confirm("vuoi eliminare questo elemento?");
            if(conf){
                this.todoList.splice(i,1);
            }
        }
    },
}).mount('#app');