var test = function() {
	console.log('通ってますか');
	var a = document.getElementById('hplogo');
	var b = chrome.extension.getURL('logo.png');
	a.setAttribute('style', 'background: url(' + b + ') no-repeat; background-size: 272px 92px; height: 92px; width: 272px;');
	var c = document.getElementsByClassName('logo-subtext')[0];
	c.parentNode.removeChild(c);
};

test();