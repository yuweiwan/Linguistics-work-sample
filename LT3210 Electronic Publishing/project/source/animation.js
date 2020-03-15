        var x = 0;//tiger's distance
		var t = 0;//remaining time to be shown
		var timer1;//call draw function 1 s per time
		var timer2;//
		
		function Start()
		{
			x = -50;
			t = 15;
			document.getElementById("TimeLeft").innerHTML =  t + " seconds left";

			timer1 = setInterval("draw()", 1000);
			timer2 = setInterval("TakenTime()", 1000);
		}
		function TakenTime() 
		{
			t--;
			if (t == 0) 
			{
				Next();
			}
			document.getElementById("TimeLeft").innerHTML =  t + " seconds left";
		}
		
		function draw()
		{
			var canvas = document.getElementById("myCanvas");
			var ctx = canvas.getContext("2d");
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			x = x + 50;

			var img = document.getElementById("clock");
			ctx.drawImage(img, x, 0, 100, 100);

			if (x + 50 == canvas.width) {
			clearInterval(timer);
			}
			return; 
		}
		
		function Next() 
		{
			clearInterval(timer1);
			clearInterval(timer2);
			Start();
		}
		function stop() 
		{
			clearInterval(timer1);
			clearInterval(timer2);
		}
		