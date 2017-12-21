(function($){
	$.fn.extend({
		renderCalendar  :   function(s)
		{
			var dc = function(a)
			{
				return document.createElement(a);
			};
			s = $.extend({}, $.fn.datePicker.defaults, s);
			if (s.showHeader != $.dpConst.SHOW_HEADER_NONE) {
				var headRow = $(dc('tr'));
				var headRow2 = $(dc('tr'));
				for (var i=Date.firstDayOfWeek; i<Date.firstDayOfWeek+7; i++) {
					var weekday = i%7;
					var day = Date.dayNames[weekday];
					headRow.append(
						jQuery(dc('th')).attr({'scope':'col', 'abbr':day, 'title':day, 'class':(weekday == 0 || weekday == 6 ? 'weekend' : 'weekday')}).html(s.showHeader == $.dpConst.SHOW_HEADER_SHORT ? day.substr(0, 1) : day)
					);
					headRow2.append(
						jQuery(dc('th')).attr({'scope':'col', 'abbr':day, 'title':day, 'class':(weekday == 0 || weekday == 6 ? 'weekend' : 'weekday')}).html(s.showHeader == $.dpConst.SHOW_HEADER_SHORT ? day.substr(0, 1) : day)
					);
				}
			};
			var calendarTable = $(dc('table'))
									.attr(
										{
											'cellspacing':0,
											'cellpadding':0,
											'className':'jCalendar'
										}
									)
									.append(
										(s.showHeader != $.dpConst.SHOW_HEADER_NONE ? 
											$(dc('thead')).append(headRow):dc('thead')
										)
									);
			var calendarTable2 = $(dc('table'))
									.attr(
										{
											'cellspacing':0,
											'cellpadding':0,
											'className':'jCalendar'
										}
									)
									.append(
										(s.showHeader != $.dpConst.SHOW_HEADER_NONE ? 
											$(dc('thead'))
												.append(headRow2)
											:
											dc('thead')
										)
									);
			var tbody = $(dc('tbody'));
			var tbody2 = $(dc('tbody'));
			var today = (new Date()).zeroTime();
			var month = s.month == undefined ? today.getMonth() : s.month;
			var month2 = month == 11 ? 0 : month + 1;
			var year = s.year || today.getFullYear();
			var year2 = month2 == 0 ? year+1 : year;
			var currentDate = new Date(year, month, 1);
			var currentDate2 =new Date(year2, month2, 1);
			var firstDayOffset = Date.firstDayOfWeek - currentDate.getDay() + 1;
			if (firstDayOffset > 1) firstDayOffset -= 7;
			var weeksToDraw = Math.ceil(( (-1*firstDayOffset+1) + currentDate.getDaysInMonth() ) /7);
			currentDate.addDays(firstDayOffset-1);
			
		var doHover = function()
			{
				if (s.hoverClass) {
					$(this).addClass(s.hoverClass);
				}
			};
			var unHover = function()
			{
				if (s.hoverClass) {
					$(this).removeClass(s.hoverClass);
				}
			};	
			var w = 0;
			while (w++<weeksToDraw) {
				var r = jQuery(dc('tr'));
				var rr = jQuery(dc('tr'));
				var rrr = jQuery(dc('tr'));
				for (var i=0; i<7; i++) {
					var thisMonth = currentDate.getMonth() == month;
					var d = $(dc('td'))
								.text(thisMonth ? currentDate.getDate() + '' : '')
								.attr('className', (thisMonth ? 'current-month ' : 'other-month2 ') +
													(currentDate.isWeekend() ? 'weekend ' : 'weekday ') +
													(thisMonth && currentDate.getTime() == today.getTime() ? 'today ' : '')
								).hover(doHover, unHover);
					if (s.renderCallback) {
						if(thisMonth)
							s.renderCallback(d, currentDate, month, year);
					}
					r.append(d);
					currentDate.addDays(1);	
					var dd = $(dc('td')).css({'height' : 17});
					rr.append(dd);
					var ddd = $(dc('td')).css({'height' : 17});
					rrr.append(ddd);
				}
				tbody.append(r);
			}
			if (weeksToDraw == 5) tbody.append(rr);
			if (weeksToDraw == 4) tbody.append(rr).append(rrr);
			calendarTable.append(tbody);
			var firstDayOffset2 = Date.firstDayOfWeek - currentDate2.getDay() + 1;
			if (firstDayOffset2 > 1) firstDayOffset2 -= 7;
			var weeksToDraw2 = Math.ceil(( (-1*firstDayOffset2+1) + currentDate2.getDaysInMonth() ) /7);
			currentDate2.addDays(firstDayOffset2-1);
			
			var q = 0;
			while (q++<weeksToDraw2) {
				var r2 = jQuery(dc('tr'));
				var rr2 = jQuery(dc('tr'));
				var rrr2= jQuery(dc('tr'));
				for (var i=0; i<7; i++) {		
					var thisMonth2 = currentDate2.getMonth() == month2;		
					var d2 = $(dc('td'))
								.text(thisMonth2 ? currentDate2.getDate() + '' : '')
								.attr('className', (thisMonth2 ? 'current-month2 ' : 'other-month2 ') +
													(currentDate2.isWeekend() ? 'weekend ' : 'weekday ') +
													(thisMonth2 && currentDate2.getTime() == today.getTime() ? 'today ' : '')
								)
								.hover(doHover, unHover)
							;
					if (s.renderCallback) {
						if(thisMonth2)
							s.renderCallback(d2, currentDate2, month2, year2);
					}
					r2.append(d2);
					currentDate2.addDays(1);

					var dd2 = $(dc('td'))
						.css({
							'height' : 17
					});
					rr2.append(dd2); 
					var ddd2 = $(dc('td'))
						.css({
							'height' : 17
					});
					rrr2.append(ddd2);
				}
				tbody2.append(r2);
			}
			if (weeksToDraw2 == 5) tbody2.append(rr2);
			if (weeksToDraw2 == 4) tbody2.append(rr2).append(rrr2);
			calendarTable2.append(tbody2);

			return this.each(
				function()
				{
					var one = $(dc('div'))
						.attr({
								'className':'jCalendar2'
						})
						.css({
							'float' : 'left',
							'left'	:	0
						})
						.append(calendarTable);
					var two = $(dc('div'))
						.attr({	
								'className':'jCalendar2'
						})
						.css({
							'float' : 'right',
							'left'	:	10000
						})
						.append(calendarTable2);
					$(this).empty().append(one);
					$(this).append(two);
					$('.other-month').css('display', 'none');
				}
			);
		},
		datePicker : function(s)
		{			
			if (!$.event._dpCache) $.event._dpCache = [];
			s = $.extend({}, $.fn.datePicker.defaults, s);
			return this.each(
				function(){
					var $this = $(this);
					var alreadyExists = true;				
					s.verticalOffset = 20;
					
					if (!this._dpId) {
						this._dpId = $.event.guid++;
						$.event._dpCache[this._dpId] = new DatePicker(this);
						alreadyExists = false;
					}

					var controller = $.event._dpCache[this._dpId];

					controller.init(s);

					/*if (!alreadyExists && s.createButton) {
						controller.button = $('<b class="dp-choose-date" title="' + $.dpText.TEXT_CHOOSE_DATE + '"></b>')
							.bind(
								'click',
								function(){
									
									$this.dpDisplay(this);
									this.blur();
									return false;
									
								}
							);
						$this.after(controller.button);
					}*/

					if (!alreadyExists && $this.is(':text')) {

						$this
							.bind(
								'click',
								function(){
									$this.dpDisplay(this);
									return false;
								}
							).bind(
								'dateSelected',
								function(e, selectedDate, $td)
								{
									this.value = selectedDate.asString();
								}
							).bind(
								'change',
								function()
								{
									if (this.value != '') {
										var d = Date.fromString(this.value);
										if (d) {
											controller.setSelected(d, true, true);
										}
									}
								}
							);
						
						var d = Date.fromString(this.value);
						if (this.value != '' && d) {
							controller.setSelected(d, true, true);
						}
					}
					
					$this.addClass('dp-applied');
					
				}
			);
		},

		dpSetDisabled : function(s)
		{
			return _w.call(this, 'setDisabled', s);
		},

		dpSetStartDate : function(d)
		{
			return _w.call(this, 'setStartDate', d);
		},

		dpSetEndDate : function(d)
		{
			return _w.call(this, 'setEndDate', d);
		},

		dpGetSelected : function()
		{
			var c = _getController(this[0]);
			if (c) {
				return c.getSelected();
			}
			return null;
		},

		dpSetSelected : function(d, v, m)
		{
			if (v == undefined) v=true;
			if (m == undefined) m=true;
			return _w.call(this, 'setSelected', Date.fromString(d), v, m, true);
		},

		dpSetDisplayedMonth : function(m, y)
		{
			return _w.call(this, 'setDisplayedMonth', Number(m), Number(y), true);
		},

		dpDisplay : function(e)
		{
			return _w.call(this, 'display', e);
		},

		dpSetRenderCallback : function(a)
		{
			return _w.call(this, 'setRenderCallback', a);
		},

		dpSetPosition : function(v, h)
		{
			return _w.call(this, 'setPosition', v, h);
		},

		dpSetOffset : function(v, h)
		{
			return _w.call(this, 'setOffset', v, h);
		},

		dpClose : function()
		{
			return _w.call(this, '_closeCalendar', false, this[0]);
		},
		// private function called on unload to clean up any expandos etc and prevent memory links...
		_dpDestroy : function()
		{
			// TODO - implement this?
		}
	});

	var _w = function(f, a1, a2, a3, a4)
	{

		return this.each(
			function()
			{
				var c = _getController(this);
				if (c) {
					c[f](a1, a2, a3, a4);
				}
			}
		);
	};

	function DatePicker(ele)
	{
		this.ele = ele;
		
		// initial values...
		this.displayedMonth		=	null;
		this.displayedYear		=	null;
		this.startDate			=	null;
		this.endDate			=	null;
		this.showYearNavigation	=	null;
		this.closeOnSelect		=	null;
		this.displayClose		=	null;
		this.rememberViewedMonth=	null;
		this.selectMultiple		=	null;
		this.verticalPosition	=	null;
		this.horizontalPosition	=	null;
		this.verticalOffset		=	null;
		this.horizontalOffset	=	null;
		this.button				=	null;
		this.renderCallback		=	[];
		this.selectedDates		=	{};
		this.inline				=	null;
		this.context			=	'#dp-popup';
	};
	$.extend(
		DatePicker.prototype,
		{
			init : function(s){
				this.setStartDate(s.startDate);
				this.setEndDate(s.endDate);
				this.setDisplayedMonth(Number(s.month), Number(s.year));
				this.setRenderCallback(s.renderCallback);
				this.showYearNavigation = s.showYearNavigation;
				this.closeOnSelect = s.closeOnSelect;
				this.displayClose = s.displayClose;
				this.rememberViewedMonth =	s.rememberViewedMonth;
				this.selectMultiple = s.selectMultiple;
				this.verticalPosition = s.verticalPosition;
				this.horizontalPosition = s.horizontalPosition;
				this.hoverClass = s.hoverClass;
				this.buttonimg = s.buttonimg;
				this.setOffset(s.verticalOffset, s.horizontalOffset);
				this.inline = s.inline;
				if (this.inline) {
					this.context = this.ele;
					this.display();
				}
			
			},
			setStartDate : function(d){
				if (d) {
					this.startDate = Date.fromString(d);
				}
				if (!this.startDate) {
					this.startDate = (new Date()).zeroTime();
				}
				this.setDisplayedMonth(this.displayedMonth, this.displayedYear);
			},
			setEndDate : function(d)
			{
				if (d) {
					this.endDate = Date.fromString(d);
				}
				if (!this.endDate) {
					this.endDate = (new Date('12/31/2115')); 
				}
				if (this.endDate.getTime() < this.startDate.getTime()) {
					this.endDate = this.startDate;
				}
				this.setDisplayedMonth(this.displayedMonth, this.displayedYear);
			},
			setOffset : function(v, h){
				this.verticalOffset = parseInt(v) || 0;
				this.horizontalOffset = parseInt(h) || 0;
			},
			setDisplayedMonth : function(m, y, rerender){
				if (this.startDate == undefined || this.endDate == undefined) {
					return;				
				}
				var s = new Date(this.startDate.getTime());
				s.setDate(1);
				var e = new Date(this.endDate.getTime());
				e.setDate(1);

				var t;
				if ((!m && !y) || (isNaN(m) && isNaN(y))) {
				
					t = new Date().zeroTime();
					t.setDate(1);
				} else if (isNaN(m)) {
					
					t = new Date(y, this.displayedMonth, 1);
				} else if (isNaN(y)) {
					
					t = new Date(this.displayedYear, m, 1);
				} else {
					
					t = new Date(y, m, 1)
				}
				
				if (t.getTime() < s.getTime()) {
					t = s;
				} else if (t.getTime() > e.getTime()) {
					t = e;
				}
				var oldMonth = this.displayedMonth;
				var oldYear = this.displayedYear;
				this.displayedMonth = t.getMonth();
				this.displayedYear = t.getFullYear();

				if (rerender && (this.displayedMonth != oldMonth || this.displayedYear != oldYear))
				{
					this._rerenderCalendar();
					$(this.ele).trigger('dpMonthChanged', [this.displayedMonth, this.displayedYear]);
				}
			},
			setSelected : function(d, v, moveToMonth, dispatchEvents){
				if (v == this.isSelected(d)) 
				{
					return;
				}
				if (this.selectMultiple == false) {
					this.selectedDates = {};
					$('td.selected', this.context).removeClass('selected');
				}
				if (moveToMonth && (this.displayedMonth != d.getMonth() || this.displayedYear != d.getFullYear())) {
					this.setDisplayedMonth(d.getMonth(), d.getFullYear(), true);
				}
				this.selectedDates[d.toString()] = v;
				
				var selectorString = 'td.';
				selectorString += d.getMonth() == this.displayedMonth ? 'current-month' : 'other-month';
				selectorString += ':contains("' + d.getDate() + '")';
				var $td;
				$(selectorString, this.ele).each(
					function()
					{
						if ($(this).text() == d.getDate())
						{
							$td = $(this);
							$td[v ? 'addClass' : 'removeClass']('selected');
						}
					}
				);
				
				if (dispatchEvents)
				{
					var s = this.isSelected(d);
					$e = $(this.ele);
					var dClone = Date.fromString(d.asString());
					$e.trigger('dateSelected', [dClone, $td, s]);
					$e.trigger('change');
				}
			},
			isSelected : function(d)
			{
				return this.selectedDates[d.toString()];
			},
			getSelected : function()
			{
				var r = [];
				for(s in this.selectedDates) {
					if (this.selectedDates[s] == true) {
						r.push(Date.parse(s));
					}
				}
				return r;
			},
			display : function(eleAlignTo)
			{
				if ($(this.ele).is('.dp-disabled')) return;
		
				eleAlignTo = eleAlignTo || this.ele;
				var c = this;
				var $ele = $(eleAlignTo);
				var eleOffset = $ele.offset();
	
				var $createIn;
				var attrs;
				var attrsCalendarHolder;
				var cssRules;
				
				if (c.inline) {
					alert('c.inline');
					$createIn = $(this.ele);
					attrs = {
						'id'		:	'calendar-' + this.ele._dpId,
						'className'	:	'dp-popup dp-popup-inline'
					};
					cssRules = {
					};
				} else {
					$createIn = $('body');
					attrs = {
						'id'		:	'dp-popup',
						'className'	:	'dp-popup'
					};
					cssRules = {
						'top'	:	eleOffset.top + c.verticalOffset+9,
						'left'	:	eleOffset.left + c.horizontalOffset-1
					};
					
					var _checkMouse = function(e)
					{
						var el = e.target;
						var cal = $('#dp-popup')[0];
						
						while (true){
							if (el == cal) {
								return true;
							} else if (el == document) {
								c._closeCalendar();
								return false;
							} else {
								el = $(el).parent()[0];
							}
						}
					};
					this._checkMouse = _checkMouse;
				
					this._closeCalendar(true);
				}
		
				$createIn
					.append(
						$('<div></div>')
							.attr(attrs)
							.css(cssRules)
							.append(
								$('<h2></h2>'),
								$('<div class="dp-nav-prev"></div>')
									.append(
										$('<a class="dp-nav-prev-year" href="#" title="' + $.dpText.TEXT_PREV_YEAR + '"></a>')
											.bind(
												'click',
												function()
												{
													return c._displayNewMonth.call(c, this, 0, -1);
												}
											),
										$('<a class="dp-nav-prev-month" href="#" title="' + $.dpText.TEXT_PREV_MONTH + '"></a>')
											.bind(
												'click',
												function()
												{
													return c._displayNewMonth.call(c, this, -1, 0);
												}
											)
									),
								$('<div class="dp-nav-next"></div>')
									.append(
										$('<a class="dp-nav-next-year" href="#" title="' + $.dpText.TEXT_NEXT_YEAR + '"></a>')
											.bind(
												'click',
												function()
												{
													return c._displayNewMonth.call(c, this, 0, 1);
												}
											),
										$('<a class="dp-nav-next-month" href="#" title="' + $.dpText.TEXT_NEXT_MONTH + '"></a>')
											.bind(
												'click',
												function()
												{
													return c._displayNewMonth.call(c, this, 1, 0);
												}
											)
									),
								$('<div></div>').attr('className', 'dp-calendar')
							)
							.bgIframe()
						);
			
				var $pop = this.inline ? $('.dp-popup', this.context) : $('#dp-popup');

				if (this.showYearNavigation == false) {
					$('.dp-nav-prev-year, .dp-nav-next-year', c.context).css('display', 'none');
				}
				if (this.displayClose) {
					$pop.append(
						$('<a href="#" id="dp-close"></a>')
							.bind(
								'click',
								function()
								{
									c._closeCalendar();
									return false;
								}
							)
					);
				}
				c._renderCalendar();
				
				$(this.ele).trigger('dpDisplayed', $pop);
				
				if (!c.inline) {
					if (this.verticalPosition == $.dpConst.POS_BOTTOM) {
						$pop.css('top', eleOffset.top + $ele.height() - $pop.height() + c.verticalOffset);
					}
					if (this.horizontalPosition == $.dpConst.POS_RIGHT) {
						$pop.css('left', eleOffset.left + $ele.width() - $pop.width() + c.horizontalOffset);
					}
					$(document).bind('mousedown', this._checkMouse);
				}
			},
			setRenderCallback : function(a){
				if (a == null) return;
				if (a && typeof(a) == 'function') {
					a = [a];
				}
				this.renderCallback = this.renderCallback.concat(a);
			},
			_displayNewMonth : function(ele, m, y) 
			{
				if (!$(ele).is('.disabled')) {
					this.setDisplayedMonth(this.displayedMonth + m, this.displayedYear + y, true);
				}
				ele.blur();
				return false;
			},
			_rerenderCalendar : function()
			{
				this._clearCalendar();
				this._renderCalendar();
			},
			_renderCalendar : function()
			{	
				var displayYear2;
				var displayMonth2;		
				displayMonth2 = this.displayedMonth == 11 ? 0 : this.displayedMonth + 1;	
				displayYear2 = displayMonth2 == 0 ? this.displayedYear+1 : this.displayedYear;
				var Nav = '<span>' + this.displayedYear + '年' + (this.displayedMonth+1) + '月' + '</span><span>' + displayYear2 + '年' + (displayMonth2+1) + '月'+ '</span>';				
				$('h2', this.context).html(Nav);
				$('.dp-calendar', this.context).renderCalendar(
					{
						month			: this.displayedMonth,
						year			: this.displayedYear,
						renderCallback	: this.cellRender,
						dpController	: this,
						hoverClass		: this.hoverClass
					}
				);
					
				if (this.displayedYear == this.startDate.getFullYear() && this.displayedMonth == this.startDate.getMonth()) {
					$('.dp-nav-prev-year', this.context).addClass('disabled');
					$('.dp-nav-prev-month', this.context).addClass('disabled');
					$('.dp-calendar td.other-month', this.context).each(
						function()
						{
							var $this = $(this);
							if (Number($this.text()) > 20) {
								$this.addClass('disabled');
							}
						}
					);
					var d = this.startDate.getDate();
					$('.dp-calendar td.current-month', this.context).each(
						function()
						{
							var $this = $(this);
							if (Number($this.text()) < d) {
								$this.addClass('disabled');
							}
						}
					);
				} else {
					$('.dp-nav-prev-year', this.context).removeClass('disabled');
					$('.dp-nav-prev-month', this.context).removeClass('disabled');
					var d = this.startDate.getDate();
					if (d > 20) {
	
						var sd = new Date(this.startDate.getTime());
						sd.addMonths(1);
						if (this.displayedYear == sd.getFullYear() && this.displayedMonth == sd.getMonth()) {
							$('dp-calendar td.other-month', this.context).each(
								function()
								{
									var $this = $(this);
									if (Number($this.text()) < d) {
										$this.addClass('disabled');
									}
								}
							);
						}
					}
				}
				if (this.displayedYear == this.endDate.getFullYear() && this.displayedMonth == this.endDate.getMonth()) {
					$('.dp-nav-next-year', this.context).addClass('disabled');
					$('.dp-nav-next-month', this.context).addClass('disabled');
					$('.dp-calendar td.other-month', this.context).each(
						function()
						{
							var $this = $(this);
							if (Number($this.text()) < 14) {
								$this.addClass('disabled');
							}
						}
					);
					var d = this.endDate.getDate();
					$('.dp-calendar td.current-month', this.context).each(
						function()
						{
							var $this = $(this);
							if (Number($this.text()) > d) {
								$this.addClass('disabled');
							}
						}
					);
				} else {
					$('.dp-nav-next-year', this.context).removeClass('disabled');
					$('.dp-nav-next-month', this.context).removeClass('disabled');
					var d = this.endDate.getDate();
					if (d < 13) {
					
						var ed = new Date(this.endDate.getTime());
						ed.addMonths(-1);
						if (this.displayedYear == ed.getFullYear() && this.displayedMonth == ed.getMonth()) {
							$('.dp-calendar td.other-month', this.context).each(
								function()
								{
									var $this = $(this);
									if (Number($this.text()) > d) {
										//$this.addClass('disabled');
									}
								}
							);
						}
					}
				}
			},
			
			cellRender : function ($td, thisDate, month, year) {
				var c = this.dpController;
				var d = new Date(thisDate.getTime());
				

				
				$td.bind(
					'click',
					function()
					{
						var $this = $(this);
						if (!$this.is('.disabled')) {
							c.setSelected(d, !$this.is('.selected') || !c.selectMultiple, false, true);
							if (c.closeOnSelect) {
								c._closeCalendar();
							}
						}
					}
				);
				
				if (c.isSelected(d)) {
					$td.addClass('selected');
				}
				for (var i=0; i<c.renderCallback.length; i++) {
					c.renderCallback[i].apply(this, arguments);
				}
			},
			_closeCalendar : function(programatic, ele)
			{
				if (!ele || ele == this.ele)
				{
					$(document).unbind('mousedown', this._checkMouse);
					
					this._clearCalendar();
					$('#dp-popup a').unbind();
					$('#dp-popup').empty().remove();
					if (!programatic) {
						$(this.ele).trigger('dpClosed', [this.getSelected()]);
					}
				}
			},
			_clearCalendar : function()
			{
				$('.dp-calendar td', this.context).unbind();
				$('.dp-calendar', this.context).empty();
			}
		}
	);
	$.dpConst = {
		SHOW_HEADER_NONE	:	0,
		SHOW_HEADER_SHORT	:	1,
		SHOW_HEADER_LONG	:	2,
		POS_TOP				:	0,
		POS_BOTTOM			:	1,
		POS_LEFT			:	0,
		POS_RIGHT			:	1
	};


	$.dpText = {
		TEXT_PREV_YEAR		:	'',
		TEXT_PREV_MONTH		:	'\u4e0a\u4e2a\u6708',
		TEXT_NEXT_YEAR		:	'',
		TEXT_NEXT_MONTH		:	'\u4e0b\u4e2a\u6708',
		TEXT_CLOSE			:	'\u5173\u95ed',
		TEXT_CHOOSE_DATE	:	'\u65e5\u671f'
	};

	$.fn.datePicker.defaults = {
		month				: undefined,
		year				: undefined,
		showHeader			: $.dpConst.SHOW_HEADER_LONG,
		startDate			: undefined,
		endDate				: undefined,
		inline				: false,
		renderCallback		: null,
		createButton		: true,
		showYearNavigation	: false,
		closeOnSelect		: true,
		displayClose		: false,
		selectMultiple		: false,
		clickInput			: true,
			
		rememberViewedMonth	: true,
		verticalPosition	: $.dpConst.POS_TOP,
		horizontalPosition	: $.dpConst.POS_LEFT,
		verticalOffset		: 0,
		horizontalOffset	: 0,
		hoverClass			: 'dp-hover'
	};

	function _getController(ele)
	{
		if (ele._dpId) return $.event._dpCache[ele._dpId];
		return false;
	};

	if ($.fn.bgIframe == undefined) {
		$.fn.bgIframe = function() {return this; };
	};

})(jQuery);