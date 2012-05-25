message = "The submit event has already occurred.";

jQuery (function($) {

	$('button#signup').click(preventResubmit) 
	function preventResubmit(e) {
		e.preventDefault();
		if (!($(this).attr("submitStatus"))) {
			$(this).attr("submitStatus", "submit_in_process");
			$('form#signup').submit();
		}
		else {
			alert (message);
		}
	}		
});