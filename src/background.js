chrome.omnibox.onInputEntered.addListener(function (text) {
    window.open("https://reddit.com/r/" +  text);
});

chrome.experimental.omnibox.onInputChanged.addListener(function (text, suggest) {

        var suggestions = [];

        suggestions.push({ content: 'r/food', description: 'Food' });
        suggestions.push({ content: 'r/art', description: 'Art' });
        suggestions.push({ content: 'r/', description: 'Art' });
        

        suggest(suggestions);
    
});