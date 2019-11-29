$(document).ready(function () {
    var textEl = document.querySelector('p');
    var fullText = textEl.innerHTML;
    var stcharLength = 230;



    if (fullText.length > stcharLength) {

        var textLess = fullText.substr(0, stcharLength);
        var textMore = fullText.substr(textLess.length, fullText.length);

        textEl.innerHTML = textLess;


        //create button
        var btn = document.createElement("BUTTON");
        var buttonText = document.createTextNode("Show More");
        btn.setAttribute('class', 'showw-more ');
        var btnattachText = btn.appendChild(buttonText);


        //attach button with the paragraph element
        textEl.appendChild(btn);

        //click on button to show the rest of the text
        btn.onclick = function () {

            if (this.className.indexOf('showw-more') > -1) {
                textEl.innerHTML = textLess + textMore;
                //add show less button in the full text
                this.innerText = "Show Less";
                this.classList.remove('showw-more');
            } else {
                textEl.innerHTML = textLess;
                //add show less button in the full text
                this.innerText = "Show More";
                this.classList.add('showw-more');
            }
            textEl.append(this);


        }

    }
});
