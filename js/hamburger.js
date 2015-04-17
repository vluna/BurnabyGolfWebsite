/*
*
* This function will make the navigation colapse for the mobile verisons
*
*/
$(document).ready( function() 
{
	var width = $(window).width();
    var hideitem = $('.sub').attr('class');

	//If the 'width' variable (width of the window) is less then 350px, then we want to perform some actions
	if (width < 350) 
	{
		$(".navToggle").css("display","block"); // Setting #navToggle to display: block;
		$(this).next(".sub").hide(); // Setting nav to display: none;
	}

	// Here we are running a function when #navToggle is clicked
	$(".navToggle").click( function() 
	{
        //alert("color = " + $(this).css("color"));
        $(".navToggle").toggleClass('navClicked');
		// The .slideToggle method slides the 'nav' open/closed over 500ms
		$(this).next(".sub").slideToggle(500);   
	});
});