    // Quote and code copy/collapse functionality. Support: https://forum.jcink.com/index.php?showtopic=27980
    document.addEventListener('DOMContentLoaded', function() {
		let qcLi = document.querySelectorAll("#CODE-WRAP, #QUOTE-WRAP")
		for (var i=0;i<qcLi.length;i++) {
		  let w = qcLi[i];
		  let c = w.querySelector('td[id]');
		  w.classList.add(w.getAttribute('id'))
		  c.classList.add(c.getAttribute('id'))
		  c.innerHTML = '<div class="collapsible">'+c.innerHTML+'</div>'
		  w.querySelector('td:first-of-type').innerHTML += '<span class="qcLi-select">(Copy to clipboard)</span><span class="qcLi-collapse-btn"></span>'
		  w.removeAttribute('id')
		  c.removeAttribute('id')
		}
		document.querySelectorAll('.qcLi-select').forEach(function(a) {
			a.addEventListener("click", function() {
				window.getSelection().selectAllChildren(this.parentNode.parentNode.nextSibling)
				document.execCommand('copy');
			});
		});
		document.querySelectorAll('.qcLi-collapse-btn').forEach(function(a) {
			a.addEventListener("click", function() {
				this.parentNode.parentNode.parentNode.classList.toggle('qcLi-collapsed')
			});
		});
    }, false);
