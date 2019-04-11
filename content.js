// regex for the item
var itemRe = new RegExp('(B[0-9A-Z]{9})');

// setup the listener to know when the use clicked the button
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "checkit") {
            checkit(request, sender, sendResponse);
            return true
        }
    }
);

// figure out the short link, return it
function checkit(request, sender, sendResponse) {
    var matches = itemRe.exec(window.location.href);
    if (matches == null) {
        return sendResponse({"url": "not found"})
    }

    var url = "https://amzn.com/"  + matches[0];
    //console.log("Found short url match: " + url);
    return sendResponse({"url": url});
}
