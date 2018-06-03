var obj = {
    foo: 'bar',
    msg: 'msg',
    rawHtml: '<span style="color:red">This text should be red!</span>'
}
//Object.freeze(obj);
new Vue({
    el: '#app',
    data: obj
});

var data = {
    a: 1,
    message: 'Hello'
};
var vm = new Vue({
    el: '#example',
    data: data,
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        funcReversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    }
});

console.log(vm.$data === data);
console.log(vm.$el === document.getElementById('example'));
vm.$watch('a', function (newValue, oldValue) {
    console.log('a value change!')
});

var vm2 = new Vue({
    el: '#demo',
    data: {
        fristName: 'bill',
        lastName: 'lee'
    },
    computed: {
        fullName: {
            get: function () {
                return this.fristName + ' ' + this.lastName;
            },
            set: function (newValue) {
                var names = newValue.split(' ');
                this.fristName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    },
    methods: {}
});


setTimeout(function () {
    obj.msg = "change message!";
    vm.message = "something";
    vm2.fullName='John Snow';
}, 2000);

