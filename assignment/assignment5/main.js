var num=0;
var text;
function postFunction(){
    text = document.getElementById("text1").value;
    if(num==0){
        var post1 = document.getElementById("topic1");
        post1.innerHTML = text;
        num++;
    }
    else if(num==1){
        var com1 = document.getElementById("comment1");
        com1.innerHTML = text;
        num++;
    }
    else if(num==2){
        var com2 = document.getElementById("comment2");
        com2.innerHTML = text;
        num++;
    }
    
}

function clearFunction(){
    topic1.innerHTML = null;
    comment1.innerHTML = null;
    comment2.innerHTML = null;
    num=0;
}