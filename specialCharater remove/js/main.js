var input=document.createElement("input");
document.body.appendChild(input);
input.setAttribute("id","id");
var but=document.createElement("button");
document.body.appendChild(but);
but.innerHTML="remove specialCharater";
but.onclick=function()
{
	var str=String(document.getElementById('id').value);
	var noSpecialChars = str.replace(/[^a-zA-Z0-9 ]/g, '  ');
    console.log(noSpecialChars);
 }

