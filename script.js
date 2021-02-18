// I am making use of the FullCalendar Angular component to renders data.
$('#calendar').fullCalendar({
	header: {
		left: 'prev,next today',
		center: 'title',
	},
	defaultDate: '2021-02-15',
    weekNumbers:true,
    weekNumberCalculation:'ISO',
	editable: true,



    // Currently, adding events is set manually. If I had more time, I would add
    // functionality for a user to choose a date and book slots automatically.
	events: [
		{
			title: 'Leave',
			start: '2021-02-15',
            end: '2021-02-20'
		},
		{
			title: 'Meeting',
			start: '2021-02-11',
            end: '2021-02-11'
		},		{
			title: 'Leave',
			start: '2021-02-01',
            end: '2021-02-03'
		},
	]
});