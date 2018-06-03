var classandstyle=new Vue({
    el:"#classandstyle",
    data:{
        classObject:{
            active:true,
            'text-danger':false
        }
    }
});

setTimeout(function () {
    classandstyle.classObject.active=false;
    classandstyle.classObject['text-danger']=true;
},2000);