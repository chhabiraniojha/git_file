const form=document.getElementById("form_element");
const listItem=document.getElementById("item");
form.addEventListener("submit",onSubmit);
listItem.addEventListener("click",removeItem);
listItem.addEventListener("click",editItem);



function onSubmit(e){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("floatingInput").value;
    const phone=document.getElementById("phone").value;
    const li=document.createElement("li");
    const deleteBtn=document.createElement("button")
    deleteBtn.id="delete";
    deleteBtn.appendChild(document.createTextNode("delete"))
    const editBtn=document.createElement("button")
    editBtn.id="edit";
    editBtn.appendChild(document.createTextNode("edit"))
    li.appendChild(document.createTextNode(email));
    li.appendChild(document.createTextNode(" - "+phone));
    listItem.appendChild(li);
    li.appendChild(deleteBtn)
    li.appendChild(editBtn)

    const details=email;
    const userDetails={
        name:name,
        email:email,
        phone:phone

    }
    const userdetails_string=JSON.stringify(userDetails);
    localStorage.setItem(details,userdetails_string);
    
    
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

function editItem(e){
    if(e.target.matches('#edit')){
            const li = e.target.parentElement;
            
            const user_details=JSON.parse(localStorage.getItem(li.firstChild.textContent));
            document.getElementById("name").value=user_details.name;
            document.getElementById("floatingInput").value=user_details.email;
            document.getElementById("phone").value=user_details.phone;
            
            listItem.removeChild(li);
            localStorage.removeItem(li.firstChild.textContent)
            
        }
    }
   

