function validateForm(){
    if(document.getElementById("uname").value==""){
        alert("Enter your Name");
        document.myform.username.focus();
    }
    else if(document.getElementById("pswd").value==""){
        alert("Enter your Password");
        document.myform.password.focus();
    }
    else if(document.getElementById("male").checked=="" && document.getElementById("female").checked==""){
        alert("Select Gender");
        document.myform.r1.checked=true;
    }
    else{
        validateUser();
        alert("Thank you!");
        document.myform.submit();
    }
}
function validateUser(){
    var ppl = ['Suraj', 'Shweta', 'Tejasvi'];
        for(var i=0;i<ppl.length;i++)
        {
            var uname = document.getElementById("uname").value;
            if(uname==ppl[i])
            {
                alert('Welcome '+uname+'!'); 
                var flag=1;
                break;
            }
        }
        if(flag!=1){
            alert('Invalid Username! Try again...');
        }       
}