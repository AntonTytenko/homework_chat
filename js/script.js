var message = document.getElementById('textMessage');

	message.onkeypress = function(el) {
		//Количество набраных символов
		document.getElementById('characters').innerHTML = message.value.length;
		
		document.getElementById("letters").innerHTML = message.match(/\w/);
		}
	
	//При нажатии на кнопку отправляеться сообщение
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
	
	//При нажатии на клавишу Enter отпралвяеться сообщение
	message.onkeyup = function (e) {if (e.keyCode === 13) {addMessage();}}

	//Функция для добавление своего имени в список онлайн
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
	//Подсчот людей в онлайн
	var countPeoply = document.getElementById('countPeoply');
	var ul = document.getElementById('peoply');
	var li = ul.getElementsByTagName('li');
	countPeoply.textContent = li.length;

//Функция времени (добавления времени в сообщения).	
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



