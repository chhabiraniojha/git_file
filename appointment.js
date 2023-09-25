const form = document.getElementById("form_element");
const listItem = document.getElementById("item");
form.addEventListener("submit", onSubmit);
listItem.addEventListener("click", removeItem);
listItem.addEventListener("click", editItem);
window.addEventListener("DOMContentLoaded",onReload)



function onSubmit(e) {
   e.preventDefault();
   const name = document.getElementById("name").value;
   const email = document.getElementById("floatingInput").value;
   const phone = document.getElementById("phone").value;
   
   const userDetails = {
      name: name,
      email: email,
      phone: phone

   }
  
   axios.post("https://crudcrud.com/api/e18b17367d614a7880ed79fce806e6fe/appointment",userDetails).then((response)=>{
      showUserOnTheScreen(response.data);
   });
   
}


function removeItem(e) {
   if (e.target.matches('#delete')) {
      if (confirm("are you sere")) {
         const li = e.target.parentElement;
         const id=li.firstChild.textContent;
         axios.delete(`https://crudcrud.com/api/e18b17367d614a7880ed79fce806e6fe/appointment/${id}`)
         listItem.removeChild(li);
   }

}
}

function editItem(e) {
   if (e.target.matches('#edit')) {
      const li = e.target.parentElement;
      const id=li.firstChild.textContent;
      console.log(id)
      axios.get(`https://crudcrud.com/api/e18b17367d614a7880ed79fce806e6fe/appointment/${id}`)
      .then(res=>{
         document.getElementById("name").value = res.data.name;
         document.getElementById("floatingInput").value = res.data.email;
         document.getElementById("phone").value = res.data.phone;
         axios.delete(`https://crudcrud.com/api/e18b17367d614a7880ed79fce806e6fe/appointment/${id}`)
         listItem.removeChild(li);
      });
   }
}










function onReload() {
   
   axios.get("https://crudcrud.com/api/e18b17367d614a7880ed79fce806e6fe/appointment")
   .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
         showUserOnTheScreen(response.data[i]);
      
      }
   });
}




function showUserOnTheScreen(obj){
   const li = document.createElement("li");
   const span=document.createElement("span");
   span.classList="hide_id";
   const deleteBtn = document.createElement("button")
   deleteBtn.id = "delete";
   deleteBtn.appendChild(document.createTextNode("delete"))
   const editBtn = document.createElement("button")
   editBtn.id = "edit";
   editBtn.appendChild(document.createTextNode("edit"))
   span.appendChild(document.createTextNode(`${obj._id}`));
   li.appendChild(span);
   li.appendChild(document.createTextNode(`${obj.email}`));
   li.appendChild(document.createTextNode(`- ${obj.phone}`));
   li.appendChild(deleteBtn)
   li.appendChild(editBtn)
   listItem.appendChild(li);
}
