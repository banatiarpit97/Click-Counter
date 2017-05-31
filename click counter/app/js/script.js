var clickCount = -1;
var timeout;
var time = 30;
var timeCount = 30;
var showTime;

function counter(){
		timeCount -=1;
		showTime = timeCount + " SECONDS";
		$(".seconds").html(showTime);
		timeout = setTimeout(counter, 1000);

		if(timeCount == 0)
			{
				clearTimeout(timeout);
				$(".numInsert").html(clickCount);
				$(".timeInsert").html(time);
				$(".after").toggleClass('hidden');
				$(".previous").addClass('hidden');
			}

		};


$(".background").click(function(){
	clickCount +=1;
	$(".count").html(clickCount);
	$(".clickhere").html("COUNTER");
	$(".tostart").html("STARTED");

	if(clickCount == 0)
	{
       counter();
       
	}	
});

$(".restart").click(function(){
	clickCount = -1;
	$(".count").html("0");
	timeCount = 30;
	$(".seconds").html("30 SECONDS");
	clearTimeout(timeout);
    $(".clickhere").html(" CLICK HERE");
	$(".tostart").html("TO START");
	$(".after").addClass('hidden');
	$(".previous").removeClass('hidden');
});

var input_time = function(){
	if(timeCount<=0 || (isNaN(timeCount)))
	{
		time = prompt("Enter Length Of Timer In Seconds(GREATER THAN 0)");
		timeCount = parseInt(time, 10);
		input_time();
	}
	else
	{
		timeCount = parseInt(time, 10);
		return 0;
	}
};

$(".modify").click(function(){

	time = prompt("Enter Length Of Timer In Seconds");
	timeCount = parseInt(time, 10);
	if(timeCount<=0 || (isNaN(timeCount))){
		input_time();
	}
	$(".timeInsert").html(time);
	showTime = timeCount + " SECONDS";
	$(".seconds").html(showTime);

});


$(function ()
{
	$("[data-toggle='popover']").popover();
});






