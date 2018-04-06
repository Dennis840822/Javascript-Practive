/*function btn1(form1) {
	alert(form1["Message"].value);//取得本表單name為Message的欄位值
	alert(document.getElementById("ZIPcode").value);
}*/
const minlength = 1;
const maxlength = 32;
function Monblur(form_message,Message_ERROR) {
	if (form_message.value.length == 0) {
		//alert('請輸入message');
		if (Message_ERROR != null) {
			Message_ERROR.innerHTML = "請輸入message";
		}
		return false;
	}
	else{
		//如果輸入標語的長度小於一定長度和大於一定長度，會顯示錯誤訊息
		if ((minlength <= form_message.value.length) && (form_message.value.length <= maxlength)){
			if (Message_ERROR != null) {
				Message_ERROR.innerHTML = "";
			}
			return true;
		}
		else{
			if (Message_ERROR != null) {
				Message_ERROR.innerHTML = "請輸入正確格式";
			}
			return false;
		}
	}

	return true;
}
function Zonblur(form_ZIP,ZIP_ERROE) {
	if (form_ZIP.value.length == 0) {
		if (ZIP_ERROE != null) {
			ZIP_ERROE.innerHTML = "請輸入Zip code";
		}
		return false;
	}
	else{
		//偵測輸入的ZIP欄位值是否為數字
		if (isNaN(form_ZIP.value) != false) {
			ZIP_ERROE.innerHTML = "請輸入數字";
			return false;
		}
		else{
			ZIP_ERROE.innerHTML = "";
			return true;
		}
	}
}
function Fonblur(form_Fly,Fly_ERROR) {
	if (form_Fly.value.length == 0) {
		if (Fly_ERROR != null) {
			Fly_ERROR.innerHTML = "請輸入飛行日期";
		}
		return false;
	}
	else {
		var RegExp1 = /^\d{2}\/\d{2}\/\d{4}$/;//定義正規表達式，新建日期檢查格式為各2為2數字1為4數字
		//  /^\d{2}\/\d{2}\/\d{4}$/=>{數字}，代表子樣式可重複的次數；{數字,數字}，控制子樣式出現的範圍 = 數字重複出現次數的範圍
		//  3種寫法1.指定數字/^\d{2}\/\d{2}\/\d{4}$/2.給數字範圍/^\d{2}\/\d{2}\/\d{3,4}$/3./^\d{2}\/\d{2}\/(\d{2}|\d{4})$/第3個數字重複次數給予重複2次OR3次重複選擇
		if (!RegExp1.test(form_Fly.value)) {//進行驗證，檢查格式是否正確，回傳格式是否正確
			Fly_ERROR.innerHTML = "請輸入正確日期格式";
		}
		else {
			Fly_ERROR.innerHTML = "";
		}
	}
	return true;
}
function nonblur(form_name,name_ERROR) {
	if (form_name.value.length == 0) {
		if (name_ERROR != null) {
			name_ERROR.innerHTML = "請輸入姓名";
		}
		return false;
	}
	return true;
}
function Ponblur(form_Phone,Phone_ERROR) {
	if (form_Phone.value.length == 0) {
		if (Phone_ERROR != null) {
			Phone_ERROR.innerHTML = "請輸入電話";
		}
		return false;
	}
	else {
		var RegExp2 = /^\d{2}-\d{7}$/;
		if (!RegExp2.test(form_Phone.value)) {
			Phone_ERROR.innerHTML = "請輸入正確電話格式";
		}
		else {
			Phone_ERROR.innerHTML = "";
		}
	}
	return true;
}
function eonblur(form_email,email_ERROR) {
	if (form_email.value.length == 0) {
		if (email_ERROR != null) {
			email_ERROR.innerHTML = "請輸入email";
		}
		return false;
	}
	else {
		var RegExp3 = /^[\w\.\-\_\+]+@[\w\_]+(\.\w{2,4})+$/;
		if (!RegExp3.test(form_email.value)) {
			email_ERROR.innerHTML = "請輸入正確email格式";
		}
		else {
			email_ERROR.innerHTML = "";
		}
	}
}
/*function Zonblur(form_ZIP) {
	if (form_ZIP.value.length == 0) {
		alert('請輸入ZIP code');
	}
}
function Fonblur(form_Fly) {
	if (form_Fly.value.length == 0) {
		alert('請輸入飛行日期');
	}
}
function nonblur(form_name) {
	if (form_name.value.length == 0) {
		alert('請輸入姓名');
	}
}
function Ponblur(form_Phone) {
	if (form_Phone.value.length == 0) {
		alert('請輸入電話');
	}
}
function eonblur(form_email) {
	if (form_email.value.length == 0) {
		alert('請輸入email');
	}
}*/