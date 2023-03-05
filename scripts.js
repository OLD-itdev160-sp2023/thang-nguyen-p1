function send(){
var arr = document.getElementsByTagName('input');
console.log(arr);
var name = arr[0].value;
var email = arr[1].value;
var check1 = arr[2].checked;
var check2 = arr[3].checked;
if(name== "" || email== ""){
    alert("Please fill all fields");
    return;
}
if(check1 || check2){

}else{
    alert("Please fill the box");
    return;
}
var choice = confirm("Confirm your information\n" + name +"\n" + email);
if(choice ==1){
    alert("Informations are sent");
}
}
function resetForm(){
    document.getElementsByTagName('form')[0].reset();

    }
