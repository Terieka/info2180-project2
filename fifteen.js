


window.onload = function(){

 
  var parea = document.getElementById("puzzlearea");
  var pieces = parea.getElementsByTagName("div");
  var shuffle = document.getElementById("shufflebutton");
  var d = this.display();
  setInterval(timer(),1000);
  var shuffle = document.getElementById("shufflebutton");
shuffle.onclick = function()
{
	var btop = blank.style.top;
	var bleft=blank.style.left;
	for (var count = 0 ; count < 300 ; count++)
	{
		var random = parseInt(Math.random()*100)%4;
		if (random==0)
		{
			var x = moveup(btop,bleft);
			if (x!= -1)
			{
				swap(x);
			}
		}
		if(random == 1)
		{
			var x = movedown(btop,bleft);
			if(x!= -1)
			{
				swap(x);
			}
		}
		if(random ==2)
		{
			var x = moveleft(btop,bleft);
			if (x!=-1)
			{
				swap(x);
			}
		}
		if (random ==3)
		{
			var x = moveright(btop,bleft);
			if (x!= -1)
			{
				swap(x);
			}
		}
	}
}
}


function display(){
  var parea = document.getElementById("puzzlearea");
  var pieces = parea.getElementsByTagName("div");
   

  for( var count = 0; count < pieces.length; count++){

    pieces[count].setAttribute("class","puzzlepiece");
    
    pieces[count].style.float = "left";
    pieces[count].style.top = (parseInt(count/4)*100)+"px";
    
    pieces[count].style.left = (count%4*100)+"px";
	
   
  }
  pieces[11].setAttribute("class", "puzzlepiece movablepiece");
  pieces[14].setAttribute("class", "puzzlepiece movablepiece");

   var empty = document.createElement("div");
  parea.appendChild(empty);
  blank(empty);
  
 
}
function blank(x)
{
	x.id="blank";
	x.setAttribute("class" ,"puzzlepiece");
	
	x.style.float= "left";
	x.style.top= "300px";
	
	x.style.left="300px";
}

function movable(x)
{
	var parea = document.getElementById("puzzlearea");
	var pieces = parea.getElementsByTagName("div");
	for (var count = 0; count <pieces.length;count++)
	{
		pieces[count].removeAttribute("class","movablepiece");
	}
	for (var count =0 ; count <x.length;count++)
	{
		if(x[count]!=null)
		{
			pieces[x[count]-1].setAttribute("class", "puzzlepiece movablepiece");
		}
	}
	
}

var time;
var seconds=0;
var minutes=0;


function timer()
{
	if (seconds==60){
		minutes++;
		seconds=0;
		
	}
		seconds++;
		time=" Time : " + minutes + ":"+ seconds;
		time=document.getElementsByTagName("h1").innerHTML ;
	
}




function moveleft (x,y)
{
	
	var x1 = parseInt(x);
	var y1 = parseInt(y);
	if (x1>0)
	{
		for (var count =0 ; count <pieces.length;count++ )
		{
			if (parseInt(pieces[count].style.left)+100==x1&&parseInt(pieces[count].style.top==y1))
			{
				return count;
			}
		}
	}
	else
	{
		return -1;
	}
	
}
function moveright(x,y)
{
	var pieces = parea.getElementsByTagName("div");
	var x1 = parseInt(x);
	var y1 = parseInt(y);
	if (x1<300)
	{
		for (var count=0; count < pieces.length;count++)
		{
			if (parseInt(pieces[count].style.left)- 100==x1&&parseInt(pieces[count].style.top==y1))
			{
				return count;
			}
		}
	}
	else
	{
		return -1;
	}
}
function moveup(x,y)
{
	var pieces = parea.getElementsByTagName("div");
	var x1 = parseInt(x);
	var y1 = parseInt(y);
	if (y1 >0)
	{
		for (var count=0; count<pieces.length; count++)
		{
			if (parseInt(pieces[count].style.top) + 100 == y1 && parseInt(pieces[count].style.left) == x1) 
			{
				return count;
			}
		} 
	}
	else 
	{
		return -1;
	}
}

function movedown(x,y)
{
	var pieces = parea.getElementsByTagName("div");
	var x1 = parseInt(x);
	var y1 = parseInt(y);
	if (y1 <300)
	{
		for (var count=0; count<pieces.length; count++)
		{
			if (parseInt(pieces[count].style.top) - 100 == y1 && parseInt(pieces[count].style.left) == x1) 
			{
				return count;
			}
		} 
	}
	else 
	{
		return -1;
	}
}

function swap (x)

{
	var pieces = parea.getElementsByTagName("div");
	var blank = pieces[15];
	var btop = blank.style.top;
	var bleft=blank.style.left;
	
	var tp = pieces[x].style.top;
	pieces[x].style.top=btop;
	btop=tp;
	
	tp=pieces[x].style.left;
	pieces[x].style.left = bleft;
	bleft = tp;
	
	
}


	

