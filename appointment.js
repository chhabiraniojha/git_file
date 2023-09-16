const form=document.getElementById("form_element");
const listItem=document.getElementById("item");
form.addEventListener("submit",onSubmit);



function onSubmit(e){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("floatingInput").value;
    const phone=document.getElementById("phone").value;
    const li=document.createElement("li");
    li.appendChild(document.createTextNode(name+" "+email+" "+phone));
    listItem.appendChild(li);
    const details=email;
    const userDetails={
        name:name,
        email:email,
        phone:phone

    }
    const userdetails_string=JSON.stringify(userDetails);
    localStorage.setItem(details,userdetails_string);
}