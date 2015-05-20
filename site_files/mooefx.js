var Site = {
	
	start: function(){
		if ($('sidebar')){
			Site.appearText();
		}
	},
		
	appearText: function(){
		var timer = 0;
		var sideblocks = $$('#sidebar li');
		
		var slidefxs = [];
		var colorfxs = [];
		
		sideblocks.each(function(el, i){
			el.setStyle('margin-left', '0px');
			timer += 150;
			slidefxs[i] = new Fx.Style(el, 'margin-left', {
				duration: 0,
				transition: Fx.Transitions.backOut,
				wait: false,
				onComplete: Site.createOver.pass([el, i])
			});
			slidefxs[i].start.delay(timer, slidefxs[i], 0);

		}, this);
	},
	
	createOver: function(el, i){
		var first = el.getFirst();
		if (!first || first.getTag() != 'a') return;
		var overfxs = new Fx.Styles(first, {'duration': 200, 'wait': false});
		var tocolor, fromcolor;
		if (first.hasClass('big')){
			tocolor = '333';
			fromcolor = 'fff';
		} else {
			tocolor = 'faec8f';
			fromcolor = 'CCCCCC';
		}
		el.mouseouted = true;
		el.addEvent('mouseenter', function(e){
			overfxs.start({
				'color': tocolor,
				'margin-left': 10
			});
		});
		el.addEvent('mouseleave', function(e){
			overfxs.start({
				'color': fromcolor,
				'margin-left': 0
			});
		});
	},
	
	
};

window.addEvent('load', Site.start);