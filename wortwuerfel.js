listen = [];

$(function() {
//window.moveTo(0, 0);
//window.resizeTo(screen.width, screen.height);
		var cand = ["testwort1","testwort2","testwort3"];
		
		for (var i=0; i<3; i++) {
			tntr_html = ich.wort_tabrow_pattern( {wort:cand[i]} );		
			$('#wort_tab').append( tntr_html );
		}

		$('.fullsizetext').autoSize('autoTextSize'); 
		console.log(listen);
});





function range(start, count) {
    if(arguments.length == 1) {
        count = start;
        start = 0;
    }

    var foo = [];
    for (var i = 0; i < count; i++) {
        foo.push(start + i);
    }
    return foo;
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
