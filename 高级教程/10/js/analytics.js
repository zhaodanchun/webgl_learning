var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-19577946-3']);
_gaq.push(['_setDomainName', 'spacegoo.com']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'http://www.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
setTimeout("_gaq.push(['_trackEvent','Time', '2', location.href]);", 2000);
setTimeout("_gaq.push(['_trackEvent','Time', '6', location.href]);", 6000);
setTimeout("_gaq.push(['_trackEvent','Time', '12', location.href]);", 12000);

var pub=function(top) {
(top)?a='top':a='bottom';
document.write("<a href='http://www.spacegoo.com' style='z-index: 100; text-decoration: normal' target='_blank'><div style='position: absolute; right: 10px; "+a+": 10px; background-image: url(/img/pub.jpg); border-radius: 15px 0px 15px 0px; width: 150px; height: 50px;' ></div></a>")
}