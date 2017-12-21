$(function()
{
			$('#startDatepicker').val('');
			$('#endDatepicker').val('');
			$('.date-pick').datePicker({createButton:true,selectMultiple:true});
		$('#startDatepicker').datePicker().bind(
			'dpClosed',
			function(e, selectedDates)
			{
			var d = selectedDates[0];
			if (d) {
				d = new Date(d);
				//$('#endDatepicker').dpSetStartDate(d.addDays(1).asString());
				//$('#endDatepicker').dpDisplay();				
				}
			}
		);
	
	 $('#endDatepicker').datePicker().bind(
		'dpClosed',
		function(e, selectedDates)
		{
			var d = selectedDates[0];
			if (d) {
				//d = new Date(d);
				//$('#startDatepicker').dpSetEndDate(d.addDays(-1).asString());
			}
		}
	);


});



$(function(){
	var td=$('.jCalendar td');
	if(td.text()==''){
		$(this).css('cursor','default');
		}
	
})