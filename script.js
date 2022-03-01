var reply_div = document.createElement("div");
reply_div.style.position = 'absolute';
reply_div.style.padding = '3px';
reply_div.style.borderRadius = '15px';
reply_div.style.background = 'black';
reply_div.style.top = '2px';
reply_div.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M9.72 7.43C17 8.47 20.5 13.3 21.93 18.48c.1.36-.36.59-.6.32-2.77-3.16-6.51-4.61-11.6-4.61v2.73c0 .72-.87 1.08-1.38.57L2.3 11.44a.809.809 0 0 1 0-1.15l6.05-6.05c.51-.51 1.38-.15 1.38.57v2.62z"></path></svg>';
reply_div.style.cursor = 'pointer';
reply_div.style.opacity = '0.5'

document.addEventListener("mouseover", mouseOverMethod);
function mouseOverMethod(e) {
    var target = e.target;
    while (target != null){
        if (target.classList.contains("focusable-list-item")) {
            if (target.classList.contains("message-in")) {
                reply_div.style.left = '';
                reply_div.style.right = '-35px';
            }else if (target.classList.contains("message-out")) {
                reply_div.style.right = '';
                reply_div.style.left = '-35px';
            }else{
                break;
            }
            var btn_div = target.querySelector("div");
            reply_div.style.display = '';
            btn_div.appendChild(reply_div);
            reply_div.onclick = function(){
                var event = new MouseEvent('dblclick', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true
                  });
                target.dispatchEvent(event);
            };
            return;
        }
        target = target.parentElement;
    }
    reply_div.style.display = 'none';
}