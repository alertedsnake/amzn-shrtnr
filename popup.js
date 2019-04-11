
function doCopy() {
    var out = document.getElementById("shrtlnk");

    var copy = function (e) {
        e.preventDefault();
        if (e.clipboardData) {
            e.clipboardData.setData('text/plain', out.value);
        } else if (window.clipboardData) {
            window.clipboardData.setData('Text', out.value);
        }
    }
    window.addEventListener('copy', copy);
    document.execCommand('copy');
    window.removeEventListener('copy', copy);
}

// on load request the short link
document.addEventListener("DOMContentLoaded", function(event) {
    var button = document.getElementById("doCopy");
    button.onclick = doCopy;

    getResults();
});

// update the input field
function showResult(link) {
    var out = document.getElementById("shrtlnk");
    out.value = link;
}

// call for the results
function getResults() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {action: "checkit"},
            function(response) {
                if (response != null)
                    showResult(response.url);
            }
        );
    });
}
