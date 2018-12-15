const div = document.createElement("div");
document.body.appendChild(div);
let size = 100;
let grow = true;

const changeHeight = function () {

    if(size > window.innerHeight/ 2){
        grow = !grow;
        div.style.backgroundColor = "red";

    } 
    
    else if (size <= 0) {
        grow = !grow;
        div.style.backgroundColor = "green";
    }

    if (grow){
        size += 5;
    }
    else { 
        size -= 5;   
    }
    div.style.height = size + "px";

}

window.addEventListener("scroll", changeHeight)