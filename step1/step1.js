var app = new Vue(
    {
        el:'#app',
        data:{
            message:'Hello Vue!'
        }
    }
);

var app2 =new Vue({
    el:'#app-2',
    data:{
        message:'page loading on '+new Date().toLocaleDateString()
    }
});

var app3=new Vue({
    el:'#app-3',
    data:{
        seen:false
    }
});

var app4=new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'learn javascrit'},
            {text:'learn vue'},
            {text:'projct'}
        ]
    }
});
var app5=new Vue({
    el:'#app-5',
    data:{
        message:'Hello Vue.js!'
    },
    methods:{
        reverseMessage:function () {
            this.message=this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el:'#app-6',
    data:{
        message:'Hello Vue.js'
    }
});

Vue.component('todo-item1',{
    template:'<li>this is todo item!</li>'
});

Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList:[
            {id:0,text:'蔬菜'},
            {id:1,text:'奶酪'},
            {id:2,text:'something you like!'}
        ]
    }
});