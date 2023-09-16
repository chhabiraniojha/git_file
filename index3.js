const form = document.getElementById("addForm");
const listItem = document.getElementById("items");
const filter = document.getElementById("filter");

// console.log(listItem)
form.addEventListener("submit", onSubmit);
listItem.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems)

function onSubmit(e) {
    e.preventDefault();
    const newItem = document.getElementById('item').value;
    const newItem2 = document.getElementById('itemDesc').value;
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem2));
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    const edit = document.createElement("button");
    edit.className = "btn btn-danger btn-sm float-right";
    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(edit);
    li.appendChild(deleteBtn);
    listItem.appendChild(li);
    localStorage.setItem("title",newItem)
    localStorage.setItem("desc",newItem2)


};

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm('Are You Sure?')) {
            const li = e.target.parentElement;
            listItem.removeChild(li);
        }
    }

}

function filterItems(e) {
    const text = e.target.value.toLowerCase();
    // console.log(text)
    // // console.log((text))
    const items = listItem.getElementsByTagName("li");
    // console.log(items)
    Array.from(items).forEach((item)=>{
         const itemName=item.firstChild.textContent;
         const itemName2=item.childNodes[1].textContent;
        //  console.log(itemName2)
        // //  console.log(indexOf(text))
         if((itemName.toLowerCase().indexOf(text)!=-1)||(itemName2.toLowerCase().indexOf(text)!=-1)){
            item.style.display="block"
         }else{
            item.style.display="none"
         }
      
    })
    
}