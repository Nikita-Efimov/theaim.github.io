document.body.addEventListener("mousemove", cursorMove, true);
document.body.getElementsByClassName('circle')[0].addEventListener("mouseover", changePos, false);
window.addEventListener("resize", init);

var minWidth, maxWidth, minHeight, maxHeight, startTime, score = 0;

init();

changePos();

setInterval(checkTime, 100);

function init()
{
	minHeight = 20;
	maxHeight = window.innerHeight - 5;
	minWidth = 5;
	maxWidth = window.innerWidth - 5;

	var p = document.getElementsByClassName('area')[0];
	p.style.top = minHeight + 'px';
	p.style.height = maxHeight - minHeight + 'px';
	p.style.left = minWidth + 'px';
	p.style.width = maxWidth - minWidth + 'px';

	var p = document.getElementsByClassName('circle')[0];
	p.style.top = getRandomInt(minHeight + 50, maxHeight - 50) + "px";
	p.style.left = getRandomInt(minWidth + 50, maxWidth - 50) + "px";
}

function checkTime()
{
	if (score == 1)
		startTime = new Date;

	var p = document.getElementById('avgTime');
	var currentTime = new Date;
	var avgt = (currentTime - startTime) / 1000 / score;
	p.innerHTML = avgt.toFixed(2);
	p = document.getElementById('score');
	p.innerHTML = score;
}

function getRandomInt(min, max)
{
	return Math.floor((Math.random()) * (max - min + 1)) + min;
}

function changePos()
{
	score++;
	var p = document.getElementsByClassName('circle')[0];
	p.style.top = getRandomInt(minHeight + 70, maxHeight - 70) + "px";
	p.style.left = getRandomInt(minWidth + 70, maxWidth - 70) + "px";
}

function cursorMove(e)
{
	var p = document.getElementsByClassName('cursor')[0];
	p.style.left = e.clientX - parseInt(getComputedStyle(document.getElementsByClassName('cursor')[0]).width)/2 + "px";
	p.style.top = e.clientY - parseInt(getComputedStyle(document.getElementsByClassName('cursor')[0]).height)/2 + "px";
}