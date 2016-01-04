// This is a function for Random Color generator; [stackoverflow.com]
		function getRandomColor() {
			// create array called "letters", these are the numbers and letters in html color code
			// the split() function splits the string '0123456789ABCDEF' into an array; an empty split function .split(''); will split them in each character/array;
			var letters = '0123456789ABCDEF'.split('');
		  var color = '#';
			/*
			Q1: Code for colors are 6 digit though, why isn't i=6 but <6?
			Q2: Also, can somebody explain in detail: letters[ what is going on here? why * 15? ]

			How the for loop works [Christopher Pearse; Udemy comments]:

			A1: In the "for loop", "var i=0" is set at the beginning on the very first cycle, so the value of "i" is "0" to begin with.
			A loop will run over and over again until it meets a certain condition. Once the condition is met, it will stop running and the rest of the code below it will continue to be executed.
			The loop will run over and over again provided the second condition "i<6" is true. So provided "i" is less than 6, the for loop will continue to cycle.
			Each time the loop runs, the third condition "i++" is run at the end of the cycle. So after one cycle of the loop, "i" increases to the value of "1". On the second cycle, "i" increases to the value of "2". Eventually "i" will become the value of "6" so on the next cycle, the second condition "i<6" is no longer true, so the loop will no longer be run.
			At this point, it has run a total of 6 times and 6 letters/numbers have been picked from the "color" variable.
			
			A2: For your second question, "Math.random()" produces a random value between 0-1.

			Once you have this value, you multiply it by 15.

			E.g.:

			0.3 x 15 = 4.5
			0.4 x 15 = 6
			0.9 x 15 = 13.5

			"Math.round()" rounds the above values to the nearest whole number:

			4.5 becomes 5
			6 stays as 6
			13.5 becomes 14

			The resulting code looks like this:

			color += letters[5]
			color += letters[6]
			color += letters[14]

			Because "letters" is an array, and the positioning within arrays start at 0, you will have the following letters:

			letters[5] = 5
			letters[6] = 6
			letters[14] = E

			So although there are 16 options in total, you are multiplying by 15 because the first position is 0.

			0-15 = 16 positions, 1 for each letter/number.
			*/		  
			for (var i = 0; i < 6; i++ ) {
		      color += letters[Math.floor(Math.random() * 16)];
		  }
		  return color;
		}

		alert(getRandomColor());


		
		// Date. function; Date.now() counts the number of milliseconds since the epoch (a date back in 1970s; not Unix timestamp)

		alert(Date.now());

		// we can measure how far two times are apart by comparing the date between two timestamps;

		var clickedTime; var createdTime; var reactionTime;

		Date.now();

		function makeBox() {

			// createdTime - the timestamp when the box appears
			createdTime=Date.now();			

			var time=Math.random();

			time=time*1000;

			setTimeout(function() {

				// if function makes the object change into either square or circle
				if (Math.random()>0.5) {

					document.getElementById("box").style.borderRadius="200px";

				} else {

					document.getElementById("box").style.borderRadius="0px";

				}

				var top=Math.random();

				top=top*300;

				var left=Math.random();

				left=left*500;

				document.getElementById("box").style.top=top+"px";

				document.getElementById("box").style.left=left+"px";

				document.getElementById("box").style.backgroundColor=getRandomColor();

				document.getElementById("box").style.display="block";

			}, time);

		}	

		document.getElementById("box").onclick=function() {

			clickedTime=Date.now();

			reactionTime=(clickedTime-createdTime)/1000;

			document.getElementById("time").innerHTML=reactionTime;

			this.style.display="none";

			makeBox();

		}

		makeBox();
