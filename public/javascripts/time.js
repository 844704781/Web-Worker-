var i=0;
function timeCount(){
    i = i +1
    //向主线程发送消息
    postMessage(i)
    setTimeout("timeCount()",500)
}

timeCount()
