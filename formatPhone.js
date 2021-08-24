function formatPhone(e) {
    var input = e.target.value;
    var cleanR = /(\D+)/g;
    cleaned = input.replace(cleanR, '');

    areacode = cleaned.substr(0, 3);
    prefix = cleaned.substr(3, 3);
    last4 = cleaned.substr(6, 4);

    var formattedPhone =
        (areacode ? '(' : '') +
        areacode +
        (prefix ? ') ' : '') +
        prefix +
        (last4 ? '-' : '') +
        last4;

    e.target.value = formattedPhone;
}

var phoneInput = document.querySelector("input[data-label='Cell Phone Number']");
if (phoneInput) {
    phoneInput.addEventListener('input', formatPhone)
}


// also listen 
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm("#phoneInput").then(elm => elm.addEventListener('input', formatPhone));

// var phoneInputCheckout = document.getElementById("phoneInput");
// if (phoneInputCheckout) {
//     phoneInputCheckout.addEventListener('input', formatPhone)
// }
