var list = document.getElementById('menu');

function addElement(str) {
	var li = document.createElement('li');
	var a = document.createElement('a');
	var span = document.createElement('span');

	span.textContent = str;
	a.appendChild(span);
	li.appendChild(a);
	list.appendChild(li);
}

$(document).ready(function () {
	$('#menu > li > a').click(function(e){
	    $(this).addClass('selected'); 
	});
});
