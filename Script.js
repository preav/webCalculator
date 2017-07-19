txtInput=document.getElementById("txtInput");
txtResult=document.getElementById("txtResult");

for (var i=0;i<10;i++){
document.getElementById("btn"+i).addEventListener("click", btnClick, false);
}

function btnClick(){
	txtInput.value=txtInput.value=="0"?this.innerText:txtInput.value+this.innerText;
}


document.getElementById("btnPlus").addEventListener("click", plus, false);
document.getElementById("btnMinus").addEventListener("click", plus, false)
function plus(){
	txtInput.value=txtInput.value+this.innerText;
}

document.getElementById("calc").addEventListener("click", calculate, false);

function calculate(){
	var index=txtInput.value.includes("+")?txtInput.value.lastIndexOf("+"):txtInput.value.lastIndexOf("-");
	txtResult.value=Number(txtInput.value.substring(0, index))+Number(txtInput.value.substring(index));
}

document.getElementById("clear").addEventListener("click", onClear, false);

function onClear(){
	txtInput.value=null;
	txtResult.value=null;
}