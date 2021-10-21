chrome.webRequest.onBeforeRequest.addListener( //add listener
    function() { //add function
        return {cancel: true };
    },
    {
        urls:[] //urls to block
    },
    ["blocking"]
);