let add=document.querySelector(".add-task input");
let list=document.querySelector(".list");
let cross=document.querySelector("span");
function save(){
    window.localStorage.setItem("data",list.innerHTML);
}


add.addEventListener("keypress",(e)=>{
    if (add.value===""&& e.key ==="Enter")
    {
        alert("you need to write something")
    }
    else if (e.key ==="Enter")
    {
        let li=document.createElement("li");
        li.innerHTML=add.value;
        let s=document.createElement("span");
        s.style.cssText="textDecoration=none"
        s.innerHTML="\u00d7";
        li.appendChild(s);
        list.appendChild(li);
        add.value=""
        save();        
    }
});

list.innerHTML=window.localStorage.getItem("data");

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        let li = e.target.classList;
        li.toggle("checked");
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentNode.remove();
        save();
    }
});

