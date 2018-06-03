var example1 = new Vue({
   el:'#example-1',
   data:{
       counter:0
   }
});
var example2 = new Vue({
    el:'#example-2',
    data:{
        name:'Vue.js'
    },
    methods:{
        greet:function (event) {
            alert('Hello '+this.name+'!')
            if (event)
            {
                alert(event.target.tagName);
            }
        }
    }
});
//example2.greet();
var example3 = new Vue({
    el:'#example-3',
    methods:{
        say:function (message) {
            alert(message);
        },
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象
            if (event) event.preventDefault()
            alert(message)
        }
    }
})