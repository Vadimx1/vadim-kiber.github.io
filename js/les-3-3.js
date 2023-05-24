function loop_num(x) {
    if(x < 2){
        return
    }
    else{
        alert(x - 1)
        loop_num(x - 1)
    }
}

loop_num(8)