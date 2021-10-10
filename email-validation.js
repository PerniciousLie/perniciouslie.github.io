function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.email.myEmail.focus();
alert("Thank you for joining our mailing list!")
return true;
}
else
{
alert("You have entered an invalid email address!");
document.email.myEmail.focus();
return false;
}
}