const form=document.getElementById("addForm");
const listItem=document.getElementById("items");

// console.log(listItem)
form.addEventListener("submit",onSubmit);
listItem.addEventListener("click",removeItem);

function onSubmit(e){
    e.preventDefault();
    const newItem = document.getElementById('item').value;
    const li=document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem));
    const deleteBtn=document.createElement("button");
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    const edit=document.createElement("button");
    edit.className="btn btn-danger btn-sm float-right";
    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(edit);
    li.appendChild(deleteBtn);
    listItem.appendChild(li);

};

function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm('Are You Sure?')){
            const li=e.target.parentElement;
            listItem.removeChild(li);
        }
    }

}