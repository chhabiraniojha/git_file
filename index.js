function getcall(event){
    event.preventDefault();
    
    console.log(event.target.username.value)
    console.log(event.target.email.value)
    console.log(event.target.phone.value)
    console.log(event.target.call_date.value)
    console.log(event.target.select_time.value)
}console.log(document.getElementById("h1").textContent)
document.getElementById("h1").style.color="red"