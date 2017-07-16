    // Mobile friendly quote and code copy/collapse functionality. Dusty@forum.jcink.com
    document.addEventListener('DOMContentLoaded', function() {
        var c1 = document.querySelectorAll("[id='CODE-WRAP']"),
            q1 = document.querySelectorAll("[id='QUOTE-WRAP']");
        for (var i = 0; i < c1.length; i++) {
            var c2 = c1[i].querySelector('#CODE');
            c1[i].className += 'CODE-WRAP'
            c1[i].removeAttribute('id')
            c2.className += 'CODE'
            c2.removeAttribute('id')
            var o = c1[i].querySelector(".CODE").innerHTML,
                n = '<div>' + o + '</div>';
            c1[i].querySelector(".CODE").innerHTML = n;
            c1[i].getElementsByTagName("td")[0].innerHTML += '<span class="nuq-select" onClick="window.getSelection().selectAllChildren(this.parentNode.parentNode.nextSibling.querySelector(\'.CODE div\')),document.exec1ommand(\'copy\');"> (Copy to clipboard)</span><span class="nuq-collapse" onClick="	this.parentNode.parentNode.parentNode.parentNode.classList.toggle(\'nulapsed\')"></span>'
        }
        for (var i = 0; i < q1.length; i++) {
            var q2 = q1[i].querySelector('#QUOTE');
            q1[i].className += 'QUOTE-WRAP'
            q1[i].removeAttribute('id')
            q2.className += 'QUOTE'
            q2.removeAttribute('id')
            var o = q1[i].querySelector(".QUOTE").innerHTML,
                n = '<div>' + o + '</div>';
            q1[i].querySelector(".QUOTE").innerHTML = n;
            q1[i].getElementsByTagName("td")[0].innerHTML += '<span class="nuq-select" onclick="window.getSelection().selectAllChildren(this.parentNode.parentNode.nextSibling.querySelector(\'.QUOTE div\')),document.exec1ommand(\'copy\');"> (Copy to clipboard)</span><span class="nuq-collapse" onclick="this.parentNode.parentNode.parentNode.parentNode.classList.toggle(\'nulapsed\')"></span>'
        }
    }, false);
