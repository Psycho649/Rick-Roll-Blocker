chrome.webRequest.onBeforeRequest.addListener( 
    function() { 
        return {cancel: true };
    },
    {
        urls:['https://raw.githubusercontent.com/Psycho649/Rick-Roll-Blocker/main/block.json'] //urls to block
    },
    ["blocking"]
);