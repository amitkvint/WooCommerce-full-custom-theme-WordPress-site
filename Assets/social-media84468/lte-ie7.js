/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'social-media\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-socialpinterest' : '&#xe000;',
			'icon-socialfacebook' : '&#xe002;',
			'icon-socialmail' : '&#xe003;',
			'icon-socialtwitter' : '&#xe004;',
			'icon-socialphone' : '&#xe001;',
			'icon-socialplay' : '&#xe005;',
			'icon-socialbrightness-medium' : '&#xe006;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-social[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};