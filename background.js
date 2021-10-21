chrome.webRequest.onBeforeRequest.addListener( //add listener
    function() { //add function
        return {cancel: true };
    },
    {
        urls:[https://] //urls to block
    },
    ["blocking"]
);