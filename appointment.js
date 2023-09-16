const form=document.getElementById("form_element");
const listItem=document.getElementById("item");
form.addEventListener("submit",onSubmit);
listItem.addEventListener("click",removeItem);



function onSubmit(e){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("floatingInput").value;
    const phone=document.getElementById("phone").value;
    const li=document.createElement("li");
    const deleteBtn=document.createElement("button")
    deleteBtn.id="delete";
    deleteBtn.appendChild(document.createTextNode("delete"))
    li.appendChild(document.createTextNode(email));
    li.appendChild(document.createTextNode(" - "+phone));
    listItem.appendChild(li);
    li.appendChild(deleteBtn)
    const details=email;
    const userDetails={
        name:name,
        email:email,
        phone:phone

    }
    const userdetails_string=JSON.stringify(userDetails);
    localStorage.setItem(details,userdetails_string);
    console.log(li)
    console.log(li.firstChild.textContent)
    
}


function removeItem(e){
    if(e.target.matches('#delete')){
        if(confirm("are you sere")){
            const li = e.target.parentElement;
            listItem.removeChild(li);
            localStorage.removeItem(li.firstChild.textContent)
        }
    }
    

}