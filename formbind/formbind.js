var example1 = new Vue({
    el: '#example-1',
    data:{
        message: '',
        checked: false
    }
});

var example3= new Vue({
    el: '#example-3',
    data: {
        checkedNames: []
    }
});

var example4 = new Vue({
    el: '#example-4',
    data: {
        picked: ''
    }
})

new Vue({
    el: '#example-5',
    data: {
        selected: ''
    }
})

new Vue({
    el: '#example-6',
    data: {
        selected: []
    }
})

new Vue({
    el: '#example-7',
    data: {
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
})