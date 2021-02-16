
// window.onload = moveToAuto;
document.addEventListener('DOMContentLoaded', moveToAuto);

function moveToAuto(){
	if(document.getElementById("editStart").value != ""){
		setTimeout(moveTo, 1300);
		// moveTo();
	}
}

function moveTo(){
	var start = document.getElementById("editStart").value;
	var count = document.getElementById("editCount").value;

	if (count === "")
	{
		count = start - 1;
	}
	
	var rand = Math.floor(Math.random() * count);
	// var newUrl = "http://etoland.co.kr/plugin/mobile/board.php?bo_table=etohumor01&wr_id="
	var newUrl = "http://etoland.co.kr/plugin/mobile/board.php?bo_table=19_photo&page=";
	// var newUrl = "/";
	newUrl = newUrl.concat(start - rand);
	newUrl = newUrl.concat('&sca=%BF%F2%C2%A9');

	document.getElementById("moveToUrl").href = newUrl;
	// alert(document.getElementById("moveToUrl").href);
	
	// location.href = newUrl;
	document.getElementById("moveToUrl").click();
}

function moveToBestOfBest(){
		window.location.href='http://etoland.co.kr/plugin/mobile/board.php?bo_table=19_photo&sca=%BF%F2%C2%A9&sfl=top_n&stx=month&sst=wr_good&sod=desc';
}