console.log("HEllo");

window.addEventListener('DOMContentLoaded',function () {
    document.getElementById("submitButton").addEventListener("click", function (event) { 
                event.preventDefault(); 
				myFunction();
            }); 
});
function myFunction(){
	
	console.log("Bonjour");
	
	var lname = document.getElementById("lname");
	var fname = document.getElementById("fname");
	var phone = document.getElementById("phone");
	var address = document.getElementById("address");
	
	var tab = document.getElementById("table");
	var row = tab.insertRow(0); 
	var cell0 = row.insertCell(0);
		cell0.innerHTML = "lname";
	var cell1 = row.insertCell(1);
		cell1.innerHTML = "fname";
	var cell2 = row.insertCell(2);
		cell2.innerHTML = "phone";
	var cell3 = row.insertCell(3);
		cell3.innerHTML = "address";
	var cell4 = row.insertCell(4);
		cell4.innerHTML = '<div><button>Update</button><button onclick='deleteRow(this)'>Delete</button></div>';
}

function deleteRow(btn) {
	var row = btn.parentNode.parentNode;
	console.log(row);
	row.parentNode.removeChild(row);
}