var message = document.getElementById('textMessage');

	message.onkeypress = function(el) {
		//���������� �������� ��������
		document.getElementById('characters').innerHTML = message.value.length;
		
		document.getElementById("letters").innerHTML = message.match(/\w/);
		}
	
	//��� ������� �� ������ ������������� ���������
	var subm = document.getElementById('submit');
	subm.onclick = addMessage;
	function addMessage() {
		var message = document.getElementById('textMessage');
		if (message.value != '') {
			var chat = document.getElementById('textChat');
			var nel=document.createElement('p');
			nel.innerHTML = "<span class='userName'>You</span>: "+ message.value + "<spsn class='time'>"+time()+"</span>";
			chat.appendChild(nel);
			message.value = '';
		}
	}
	
	//��� ������� �� ������� Enter ������������� ���������
	message.onkeyup = function (e) {if (e.keyCode === 13) {addMessage();}}

	//������� ��� ���������� ������ ����� � ������ ������
	var name = document.getElementById('name');
	name.onkeyup = function (event) {
		if (event.keyCode === 13) {
			alert('You push Enter');
			/*var peoply = document.getElementById('peoply');
			var li = document.createElement('li');
			li.textContent = name.value;
			peoply.appendChild(nel);
			name.value = '';*/
		}
	}
	//������� ����� � ������
	var countPeoply = document.getElementById('countPeoply');
	var ul = document.getElementById('peoply');
	var li = ul.getElementsByTagName('li');
	countPeoply.textContent = li.length;

//������� ������� (���������� ������� � ���������).	
function time() {	
	var date = new Date();
	var m = date.getMinutes();
	var h = date.getHours();
	var s = date.getSeconds();
	if (m < 10 ) m="0"+m;
	if (h < 10 ) h="0"+h;
	if (s < 10 ) s="0"+s;
	return h +":"+ m;
}

setInterval(function (){document.getElementById('time').innerHTML = time()}, 1000);



