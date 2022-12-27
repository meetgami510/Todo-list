let inputTag = document.querySelector("input");
let ulTag = document.querySelector("ul");

inputTag.addEventListener("keydown",function(e){
    let key = e.key;
    if(key == 'Enter')
    {
        let value = inputTag.value;
        if(value.length == 0)
        {
            return;
        }
        inputTag.value = "";
        let liTag = document.createElement("li");
        liTag.innerHTML = `<div>${value}</div>
                            <div class="delete"><i class="fa fa-trash"></i></div>`
        handleremoval(liTag);
        ulTag.appendChild(liTag)
    }
})

function handleremoval(liTag)
{
    let deleDiv = liTag.querySelector(".delete");
    deleDiv.addEventListener("click",function(){
        liTag.remove();
    })
}