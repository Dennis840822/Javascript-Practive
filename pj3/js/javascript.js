function btn1(){
			const PRICEPERDOUNT = 10;
			const TAXRATE = 0.3;
			var sum = 0;
			if (document.getElementById("name").value == "") {
				alert("請輸入姓名");
			}
			else if (document.getElementById("CakeCount").value == "") {
				alert("請輸入CakeCount");
			}
			else if (document.getElementById("GlazedCount").value == "") {
				alert("請輸入GlazedCount");
			}else{
				if ((isNaN(parseInt(document.getElementById("CakeCount").value)) == true) || (isNaN(parseInt(document.getElementById("GlazedCount").value)) == true)) {
					alert("請輸入正確格式");
				}else{
					var dount = document.getElementById("GlazedCount").value;
					if (dount.indexOf("dozen") != -1) {
						var Subtotal = parseInt(document.getElementById("CakeCount").value) + ((parseInt(document.getElementById("GlazedCount").value)) * 12);
						document.getElementById("Subtotal").value = parseInt(Subtotal) * PRICEPERDOUNT;
						document.getElementById("Tax").value = parseInt(document.getElementById("Subtotal").value) * TAXRATE;
						document.getElementById("Total").value = parseInt(document.getElementById("Subtotal").value) + parseInt(document.getElementById("Tax").value);
						var number1 = document.getElementById("Subtotal").value;
						var number2 = document.getElementById("Tax").value;
						var number3 = document.getElementById("Total").value;
						var number5 = document.getElementById("name").value;
						alert(+ number1 + "\n" + number2 + "\n" + number3 + "\n" + number5);
					} else {
						var Subtotal = parseInt(document.getElementById("CakeCount").value) + parseInt(document.getElementById("GlazedCount").value);
						document.getElementById("Subtotal").value = parseInt(Subtotal) * PRICEPERDOUNT;
						document.getElementById("Tax").value = parseInt(document.getElementById("Subtotal").value) * TAXRATE;
						document.getElementById("Total").value = parseInt(document.getElementById("Subtotal").value) + parseInt(document.getElementById("Tax").value);
						var number1 = document.getElementById("Subtotal").value;
						var number2 = document.getElementById("Tax").value;
						var number3 = document.getElementById("Total").value;
						var number5 = document.getElementById("name").value;
						alert(+ number1 + "\n" + number2 + "\n" + number3 + "\n" + number5);
					}
				}
			}
		}