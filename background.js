//TODO: Make this work

chrome.webRequest.onBeforeRequest.addListener(info => {
  function block_urls() { 
    return {cancel: true };
}
{
  urls: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=xvFZjo5PgG0", "https://www.youtube.com/watch?v=iik25wqIuFo", "https://www.youtube.com/watch?v=ub82Xb1C8os", "https://www.youtube.com/watch?v=Yb6dZ1IFlKc", "https://www.youtube.com/watch?v=QB7ACr7pUuE", "https://www.youtube.com/watch?v=8ybW48rKBME", "https://www.thisworldthesedays.com/*"] //urls to block
}
["blocking"]
  
})