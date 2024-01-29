var e=document.querySelector(".logo"),n=new Promise(function(n,o){e.addEventListener("click",n)}),o=new Promise(function(e,n){setTimeout(function(){n(Error("Error"))},3e3)});n.then(function(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="message">\n        Promise was resolved!\n      </div>\n    ')}),o.catch(function(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="message error-message">\n        Promise was rejected!\n      </div>\n    ')});//# sourceMappingURL=index.cfdcd933.js.map

//# sourceMappingURL=index.cfdcd933.js.map
