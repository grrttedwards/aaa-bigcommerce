function formatPhone(e) {
    var input = e.target.value;
    var cleanR = /(\D+)/g;
    cleaned = input.replace(cleanR, '');

    countrycode = cleaned.substr(0, 1);

    if (countrycode === "1") {
        areacode = cleaned.substr(1, 3);
        prefix = cleaned.substr(4, 3);
        last4 = cleaned.substr(7, 4);
    }
    else {
        areacode = cleaned.substr(0, 3);
        prefix = cleaned.substr(3, 3);
        last4 = cleaned.substr(6, 4);
    }

    var formattedPhone =
        (countrycode === "1" ? countrycode + (areacode ? " " : "") : "") +
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

// waitForElm("#phoneInput").then(elm => elm.addEventListener('input', formatPhone));

// var phoneInputCheckout = document.getElementById("phoneInput");
// if (phoneInputCheckout) {
//     phoneInputCheckout.addEventListener('input', formatPhone)
// }
