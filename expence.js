const form=document.getElementById("addForm");
const listItem=document.getElementById("items");
form.addEventListener("submit",onSubmit);
listItem.addEventListener("click",removeItem);
listItem.addEventListener("click",editItem);



function onSubmit(e){
    e.preventDefault();
    const expenceAmount=document.getElementById("item").value;
    const expenceDesc=document.getElementById("itemDesc").value;
    const expenceCategory=document.getElementById("category").value;
    const li=document.createElement("li");
    li.className = "list-group-item";
    const deleteBtn=document.createElement("button")
    deleteBtn.id="delete";
    deleteBtn.className="btn btn-danger  btn-sm float-right";
    deleteBtn.appendChild(document.createTextNode("delete"))
    const editBtn=document.createElement("button")
    editBtn.id="edit";
    editBtn.className="btn btn-primary btn-sm float-right";
    editBtn.appendChild(document.createTextNode("edit"))
    const details=expenceAmount;
    const expenceDetails={
        expenceAmount:expenceAmount,
        expenceDesc:expenceDesc,
        expenceCategory:expenceCategory

    }
    const expencedetails_string=JSON.stringify(expenceDetails);
    localStorage.setItem(details,expencedetails_string);
    
    li.appendChild(document.createTextNode(expenceAmount));
    li.appendChild(document.createTextNode("- "+expenceDesc));
    li.appendChild(document.createTextNode("- "+expenceCategory));
    listItem.appendChild(li);
    li.appendChild(deleteBtn)
    li.appendChild(editBtn)

   
    
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
            document.getElementById("item").value=user_details.expenceAmount;
            document.getElementById("itemDesc").value=user_details.expenceDesc;
            document.getElementById("category").value=user_details.expenceCategory;
            
            listItem.removeChild(li);
            localStorage.removeItem(li.firstChild.textContent)
            
        }
}



     
    function onReload(){
        let ls=Object.keys(localStorage)
        for(let i=0;i<ls.length;i++){
            
            let items=JSON.parse(localStorage.getItem(ls[i]))
            const li=document.createElement("li");
            li.className = "list-group-item";
            const deleteBtn=document.createElement("button")
            deleteBtn.id="delete";
            deleteBtn.className="btn btn-danger btn-sm float-right";;
            deleteBtn.appendChild(document.createTextNode("delete"))
            const editBtn=document.createElement("button")
            editBtn.id="edit";
            editBtn.className="btn btn-primary btn-sm float-right";
            editBtn.appendChild(document.createTextNode("edit"))
            li.appendChild(document.createTextNode(`${items.expenceAmount}`));
            li.appendChild(document.createTextNode(`- ${items.expenceDesc}`));
            li.appendChild(document.createTextNode(`- ${items.expenceCategory}`));
            li.appendChild(deleteBtn)
            li.appendChild(editBtn)
            listItem.appendChild(li);
        }
    }
    onReload();
