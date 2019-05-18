window.onload = function(){
    var fm = document.getElementById('myForm');

    function addEvent(obj, type, fn) {//添加事件兼容
    
        if (obj.addEventListener) {
        
        obj.addEventListener(type, fn);
        
        } else if (obj.attachEvent) {
        
        obj.attachEvent('on' + type, fn);
        
        }
        
    }
    
    addEvent(fm, 'onsubmit', function(evt){
        preDef(evt);
        if (flag == true)  return;                     //如果存在返回退出事件
        flag = true;            //否则确定是第一次，设置为true，表示我提交过一次了
       alert('提交');
       14 
       setTimeout(function () {
           fm.submit();
        }, 3000);
    })
    
    fm.onsubmit = function () {
        alert('您的问卷已提交，感谢您的参与！');
    }
}
