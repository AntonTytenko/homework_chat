var message = document.getElementById('textMessage');

	message.onkeypress = function(el) {
		//���������� �������� ��������
		document.getElementById('characters').innerHTML = message.value.length;
		document.getElementById("counter").value = el.value.split(" ").length;}
	
	//��� ������� �� ������ ������������� ���������
	var subm = document.getElementById('submit');
	subm.onclick = function() {
		var message = document.getElementById('textMessage');
		if (message.value != '') {
			var chat = document.getElementById('textChat');
			var nel=document.createElement('p');
			nel.innerHTML = "<span class='userName'>You</span>: "+ message.value + "<spsn class='time' id='time'></span>";
			chat.appendChild(nel);
			message.value = '';
		}
	}
	
	//��� ������� �� ������� Enter ������������� ���������
	message.onkeyup = function (e) {
		if (message.value != '') {
		if (e.keyCode === 13) {
			
			var chat = document.getElementById('textChat');
			var nel=document.createElement('p');
			nel.innerHTML = "<span class='userName'>You</span>: "+ message.value + "<spsn class='time' id='time'></span>";
			chat.appendChild(nel);
			message.value = '';
		}
		}
	}
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
	
function time() {	
	var date = new Date();
	var m = date.getMinutes();
	var h = date.getHours();
	var s = date.getSeconds();
	var time = document.getElementsByClassName('time');
	time.innerHTML  = h +":"+ m;
}
time();