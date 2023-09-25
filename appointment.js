const form = document.getElementById("form_element");
const listItem = document.getElementById("item");
form.addEventListener("submit", onSubmit);
listItem.addEventListener("click", removeItem);
listItem.addEventListener("click", editItem);



function onSubmit(e) {
   e.preventDefault();
   const name = document.getElementById("name").value;
   const email = document.getElementById("floatingInput").value;
   const phone = document.getElementById("phone").value;
   const li = document.createElement("li");
   const deleteBtn = document.createElement("button")
   deleteBtn.id = "delete";
   deleteBtn.appendChild(document.createTextNode("delete"))
   const editBtn = document.createElement("button")
   editBtn.id = "edit";
   editBtn.appendChild(document.createTextNode("edit"))
   const details = email;
   const userDetails = {
      name: name,
      email: email,
      phone: phone

   }
   //  const userdetails_string=JSON.stringify(userDetails);
   //  localStorage.setItem(details,userdetails_string);
   axios.post("https://crudcrud.com/api/e80aecaa4d714762bfafbfb146304fe6/appointment", userDetails)
   li.appendChild(document.createTextNode(email));
   li.appendChild(document.createTextNode(phone));
   listItem.appendChild(li);
   li.appendChild(deleteBtn)
   li.appendChild(editBtn)




}


function removeItem(e) {
   if (e.target.matches('#delete')) {
      if (confirm("are you sere")) {
         const li = e.target.parentElement;
         listItem.removeChild(li);
         console.log(li.firstChild)
         axios.delete("https://crudcrud.com/api/e80aecaa4d714762bfafbfb146304fe6/appointment/65119616b987ad03e876c309")
      }
   }

}

function editItem(e) {
   if (e.target.matches('#edit')) {
      const li = e.target.parentElement;

      const user_details = JSON.parse(localStorage.getItem(li.firstChild.textContent));
      document.getElementById("name").value = user_details.name;
      document.getElementById("floatingInput").value = user_details.email;
      document.getElementById("phone").value = user_details.phone;

      listItem.removeChild(li);
      localStorage.removeItem(li.firstChild.textContent)

   }



}
const getData = function () {
   return axios.get("https://crudcrud.com/api/e80aecaa4d714762bfafbfb146304fe6/appointment").then(res => res)

}









function onReload() {
   const userDetails = getData();
   userDetails.then((response) => {
      for (let i = 0; i < response.data.length; i++) {
         console.log(response.data[i])
         // let items=JSON.parse(localStorage.getItem(ls[i]))
         const li = document.createElement("li");
         const deleteBtn = document.createElement("button")
         deleteBtn.id = "delete";
         deleteBtn.appendChild(document.createTextNode("delete"))
         const editBtn = document.createElement("button")
         editBtn.id = "edit";
         editBtn.appendChild(document.createTextNode("edit"))
         li.appendChild(document.createTextNode(`${response.data[i].email}`));
         li.appendChild(document.createTextNode(`- ${response.data[i].phone}`));
         li.appendChild(deleteBtn)
         li.appendChild(editBtn)
         listItem.appendChild(li);
      }
   });

}
onReload();

