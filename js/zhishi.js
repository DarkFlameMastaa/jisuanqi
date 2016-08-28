function test() {
	var num1 = "";
	var num2 = "";
	var sign = "";
	var txt = G('txt');
	var num = G("num");
	var eque = G("eque");
	var res = "";
	var numArr = num.getElementsByTagName('input');
	for (var i = 0; i < numArr.length; i++) {
		numArr[i].onclick = function() {
			if (num1 == "") {
				num1 = this.value;
				console.log(num1);
			} else if (num2 == "" && sign == "") {
				num1 = (Number(num1 * 10) + Number(this.value));
				console.log(num1);
			} else if (sign != "" && num2 == "") {
				num2 = this.value;
			} else if (num2 != "") {
				num2 = (Number(num2 * 10) + Number(this.value));
			}
			txt.value = num1 + sign + num2;
		}
	}
	var signArr = G('sign').getElementsByTagName('input');
	for (var j = 0; j < signArr.length; j++) {
		signArr[j].onclick = function() {
			if (num2 != "") {
				num1 = eval(num1 + sign + num2);
				sign = this.value;
				num2 = "";
				txt.value = num1 + sign + num2;
			}
			else{
				sign = this.value;
			txt.value = num1 + sign + num2;
			}
			
		}
	}
	eque.onclick = function() {
		txt.value = eval(num1 + sign + num2);
	}



	// var signArr = G("sign").getElementsByTagName("input");
	// for (var j = 0; j < signArr.length; j++) {
	// 	signArr[j].onclick = function() {
	// 		if (num2 != "") {
	// 			switch (sign) {
	// 				case "+":
	// 					res = Number(num1) + Number(num2);
	// 					break;

	// 				case "-":
	// 					res = Number(num1) - Number(num2);
	// 					break;

	// 				case "*":
	// 					res = Number(num1) * Number(num2);
	// 					break;

	// 				case "/":
	// 					res = Number(num1) / Number(num2);
	// 					break;
	// 			}
	// 			num1 = res;
	// 			num2 = "";
	// 		}

	// 		sign = this.valuse;
	// 		G("txt").value = num1 + sign;
	// 	}
	// }
	// G("eque").onclick = function() {
	// 	switch (sign) {
	// 		case "+":
	// 			res = Number(num1) + Number(num2);
	// 			break;

	// 		case "-":
	// 			res = Number(num1) - Number(num2);
	// 			break;

	// 		case "*":
	// 			res = Number(num1) * Number(num2);
	// 			break;

	// 		case "/":
	// 			res = Number(num1) / Number(num2);
	// 			break;
	// 	}
	// }
}

function G(sID) {
	return document.getElementById(sID);
}

addOnLoad(test);