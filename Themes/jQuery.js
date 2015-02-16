$(function(){
/*! ==================================
Coding : UTF-8 [Time:2014-10-01]
System : BET.SEM.COM.DE [By Lyke]
====================================== */

/* 图片延迟加载 */
$('img').lazyload({effect:'fadeIn'});

/* 图片滑动轮播 */
$('#slider').mobilyslider({
    content:'.sliders',
    children:'.item',
    transition:'horizontal',// horizontal-水平，vertical-垂直，fade-渐变
    animationSpeed:300,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:true,
    bullets:true,
    arrows:true,
    arrowsHide:true,
    prev:'prev',
    next:'next',
    animationStart:function(){},
    animationComplete:function(){}
});

/* 图片上滑特效 */
$('.slide').find('li').hover(
    function(){$(this).find('.text').slideDown('fast');},
    function(){$(this).find('.text').slideUp('fast');}
);

/* 客户端下载 */
$('#down').click(function(){
    window.location.href='http://cnrdn.com/YvmE';
});

/* 导航焦点定位 */
$('#gotop').click(function(){
    $('html,body').animate({scrollTop:0},1000);
});

$('#header').find("[href='#Home']").click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},1000);
});

$('#footer').find("[href='#Home']").click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},1000);
});

$('.id').each(function(){
    var idtop = $(this).offset().top;
    var theid = '#' + $(this).attr('id');
    $('#header').find("[href=" + theid + "]").click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:idtop},1000);
    });
    $('#footer').find("[href=" + theid + "]").click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:idtop},1000);
    });
});

/* 主动焦点定位 */
$(window).scroll(function(){
    var theid = '';
    var ids = $('.id');
    var top = $(window).scrollTop();
    var navon = $('#header').find('.on');
    if(top > 200){$('#gotop').fadeIn('slow');}else{$('#gotop').fadeOut('slow');} /* 返回顶部渐变 */
    ids.each(function(){
        var idtop = $(this).offset().top - 200;
        if(top > idtop){
            theid = '#' + $(this).attr('id');
        }else{
            return false;
        }
    });
    if(theid){
        if(navon.attr('href') != theid){
            navon.removeClass('on');
            $('#header').find("[href=" + theid + "]").addClass('on');
        }
    }else{
        if(navon.attr('href') != '#Home'){
            navon.removeClass('on');
            $('#header').find("[href='#Home']").addClass('on');
        }
    }
});

});

/*! jQuery.Lazyload.js 图片延迟加载插件 使用方法: $('img').lazyload({effect:'fadeIn'}); */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(4($){$.Q.R=4(t){8 1={b:0,z:0,c:"j",B:"S",3:6,p:"T:P/O;K,J/"};5(t){$.C(1,t)}8 m=9;5("j"==1.c){$(1.3).r("j",4(c){8 w=0;m.y(4(){5(!$.g(9,1)&&!$.i(9,1)){$(9).G("q")}h{5(w++>1.z){k x}}});8 A=$.U(m,4(e){k!e.f});m=$(A)})}k 9.y(4(){8 2=9;$(2).d("o",$(2).d("l"));5("j"!=1.c||$.g(2,1)||$.i(2,1)){5(1.p){$(2).d("l",1.p)}h{$(2).13("l")}2.f=x}h{2.f=v}$(2).W("q",4(){5(!9.f){$("<X />").r("Y",4(){$(2).Z().d("l",$(2).d("o"))[1.B](1.V);2.f=v}).d("l",$(2).d("o"))}});5("j"!=1.c){$(2).r(1.c,4(c){5(!2.f){$(2).G("q")}})}})};$.g=4(e,1){5(1.3===E||1.3===6){8 7=$(6).H()+$(6).11()}h{8 7=$(1.3).n().D+$(1.3).H()}k 7<=$(e).n().D-1.b};$.i=4(e,1){5(1.3===E||1.3===6){8 7=$(6).F()+$(6).N()}h{8 7=$(1.3).n().s+$(1.3).F()}k 7<=$(e).n().s-1.b};$.C($.L[\':\'],{"14-u-7":"$.g(a, {b : 0, 3: 6})","M-u-7":"!$.g(a, {b : 0, 3: 6})","12-I-7":"$.i(a, {b : 0, 3: 6})","s-I-7":"!$.i(a, {b : 0, 3: 6})"})})(10);',62,67,'|settings|self|container|function|if|window|fold|var|this||threshold|event|attr|element|loaded|belowthefold|else|rightoffold|scroll|return|src|elements|offset|original|placeholder|appear|bind|left|options|the|true|counter|false|each|failurelimit|temp|effect|extend|top|undefined|width|trigger|height|of|iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAYAAABIdFAMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNo8zjsOxCAMBFB|base64|expr|above|scrollLeft|png|image|fn|lazyload|show|data|grep|effectspeed|one|img|load|hide|jQuery|scrollTop|right|removeAttr|below'.split('|'),0,{}))

/*! jQuery.MobilySlider.js 图片滑动轮播插件 [Web www.mobily.pl] */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(5($){$.1y.1C=5(1e){G 1c={1f:".1u",P:".9",L:"R",s:1m,J:H,1l:1n,15:H,8:H,c:H,18:H,y:"y",o:"o",N:5(){},O:5(){}};G 6=$.1o({},1c,1e);U n.1i(5(){G $t=$(n),9=$t.P(6.1f).P(6.P),l=9.1A-1,w=9.1s(),h=9.1t(),d=0,Z,8,c,z,g,u;G 7={1d:5(){7.1b();e(6.8){7.8.V()}e(6.c){7.c.V()}e(6.J){7.J()}7.1a()},1b:5(){9.1i(5(i){$(n).j("z-f",-(i-l))});e(6.L=="r"){9.X().k(0).1j()}},C:{y:5(){d==l?9.k(0).j("z-f",l+3):9.j("z-f",l+1);9.k(d).j("z-f",l+4).o(9).j("z-f",l+2)},o:5(){9.j("z-f",l+1).k(d).j("z-f",l+3).y(9).j("z-f",l+2)},8:5(){9.j("z-f",l+1).k(g).j("z-f",l+2);9.k(d).j("z-f",l+3)},x:5(){e(z==1){7.C.o()}14{e(z==-1){7.C.y()}14{e(z==0){7.C.8()}}}}},m:{D:5(v){6.N.B(n);9.k(d).Q({D:v+"="+w},6.s,5(){7.C.x()}).Q({D:0},6.s+16,5(){6.O.B(n)})},E:5(v){6.N.B(n);9.k(d).Q({E:v+"="+h},6.s,5(){7.C.x()}).Q({E:0},6.s+16,5(){6.O.B(n)})},r:5(){6.N.B(n);9.1B(6.s).k(d).1x(6.s,5(){6.O.B(n)})}},S:{1k:5(){d==0?d=l:d--;z=-1;Y(6.L){q"R":7.m.D("-");p;q"13":7.m.E("+");p;q"r":7.m.r();p}},o:5(){d==l?d=0:d++;z=1;Y(6.L){q"R":7.m.D("+");p;q"13":7.m.E("-");p;q"r":7.m.r();p}}},J:5(){Z=1z(5(){7.S.o();e(6.8){1q(5(){7.8.T()},6.s+1m)}},6.1l)},1h:5(){1F(Z)},8:{V:5(){$t.I($("<1g />").A("8"));8=$t.M(".8");1w(i=0;i<=l;i++){8.I($("<a />").K({12:"#",F:i}).11(i))}},x:5(){u=8.M("a");u.k(0).A("g");u.W(5(){G b=$(n),F=b.K("F");g=u.1r(".g").K("F");d=F;v=F>g?"+":"-";z=0;e(!b.1v("g")){Y(6.L){q"R":7.m.D(v);p;q"13":7.m.E(v);p;q"r":7.m.r();p}}u.17("g");b.A("g");U 10})},T:5(){u.17("g").k(d).A("g")}},c:{V:5(){$t.I($("<1g />").A("c"));c=$t.M(".c");c.I($("<a />").K("12","#").A(6.y).11("1E"));c.I($("<a />").K("12","#").A(6.o).11("1D"))},x:5(){c.M("."+6.y).W(5(){7.S.1k();e(6.8){7.8.T()}U 10});c.M("."+6.o).W(5(){7.S.o();e(6.8){7.8.T()}U 10});e(6.18){c.X();$t.19(5(){c.1j()},5(){c.X()})}}},1a:5(){e(6.c){7.c.x()}e(6.8){7.8.x()}e(6.15){$t.19(5(){7.1h()},5(){7.J()})}}};7.1d()})}}(1p));',62,104,'|||||function|sets|slider|bullets|item|||arrows|step|if|index|active|||css|eq||slide|this|next|break|case|fade|animationSpeed||bullet|sign||trigger|prev||addClass|call|zindex|left|top|rel|var|true|append|autoplay|attr|transition|find|animationStart|animationComplete|children|animate|horizontal|animation|update|return|create|click|hide|switch|play|false|text|href|vertical|else|pauseOnHover|200|removeClass|arrowsHide|hover|triggers|data|defaults|init|options|content|div|pause|each|show|previous|autoplaySpeed|300|3000|extend|jQuery|setTimeout|filter|width|height|sliders|hasClass|for|fadeIn|fn|setInterval|length|fadeOut|mobilyslider|Next|Prev|clearInterval'.split('|'),0,{}))
