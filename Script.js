txtInput=document.getElementById("txtInput");
txtResult=document.getElementById("txtResult");
document.getElementById("btnPlus").addEventListener("click", operation, false);
document.getElementById("btnMinus").addEventListener("click", operation, false);
document.getElementById("calc").addEventListener("click", calculate, false);
document.getElementById("clearAll").addEventListener("click", onClear, false);
document.getElementById("clearLast").addEventListener("click", onClearLast, false);
document.getElementById("btnMul").addEventListener("click", operation, false);
document.getElementById("btnDiv").addEventListener("click", operation, false);
for (var i=0;i<10;i++){
document.getElementById("btn"+i).addEventListener("click", btnClick, false);
}

function btnClick(){
	txtInput.value=txtInput.value=="0"?this.innerText:txtInput.value+this.innerText;
}

function operation(){
	txtInput.value=txtInput.value+this.innerText;
}


function calculate(){
	var index=0;
	// txtInput.value.includes("+")?txtInput.value.lastIndexOf("+"):txtInput.value.lastIndexOf("-");
	if(txtInput.value.includes("+")){
		index=txtInput.value.lastIndexOf("+");
		txtInput.value=Number(txtInput.value.substring(0, index))+Number(txtInput.value.substring(index+1));
	}
	else if(txtInput.value.includes("-")){
		index=txtInput.value.lastIndexOf("-");
		txtInput.value=Number(txtInput.value.substring(0, index))-Number(txtInput.value.substring(index+1));
	}
	else if(txtInput.value.includes("x")){
		index=txtInput.value.lastIndexOf("x");
		txtInput.value=Number(txtInput.value.substring(0, index))*Number(txtInput.value.substring(index+1));
	}
	else {
		index=txtInput.value.lastIndexOf("/");
		txtInput.value=Number(txtInput.value.substring(0, index))/Number(txtInput.value.substring(index+1));
	}
	// txtInput.value=Number(txtInput.value.substring(0, index))+Number(txtInput.value.substring(index));
}

function onClear(){
	txtInput.value=null;
	txtResult.value=null;
}

function onClearLast(){
	txtInput.value=txtInput.value.substring(0,(txtInput.value.length)-1);
	txtResult.value=null;
}