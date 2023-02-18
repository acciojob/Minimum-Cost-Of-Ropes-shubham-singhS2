//your code here
function minCostToFormRope(event) {
	event.preventDefault();
	var firstinput=document.querySelector("input").value;
    var arr=firstinput.split(",");
    arr.sort(function (a, b) {
    return a - b;
  });

var cost=0;
while(arr.length>1){
	var result=Number(arr[0])+Number(arr[1]);
	arr.splice(0,2);
	arr.push(result);
	cost+=result;
	arr.sort(function(a,b){
		return a-b;
	});
}
document.getElementById("result").textContent=cost;	
}