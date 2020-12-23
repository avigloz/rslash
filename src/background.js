// Copyright 2020, Avi Glozman (avi@avigloz.net)

var isFirefox = typeof InstallTrigger !== 'undefined';

if (!isFirefox) {
	chrome.omnibox.onInputEntered.addListener(function (text) {
	    chrome.tabs.create({
	    	url: "https://reddit.com/r/" + text
	    })
	});
	
	chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
		var suggestions = [];

		suggestions.push({ content: 'r/food', description: 'Food' });
		suggestions.push({ content: 'r/cats', description: 'Cats'});
		suggestions.push({ content: 'r/art', description: 'Art' });
			
		suggest(suggestions);
	});
}
else {
	browser.omnibox.onInputEntered.addListener(function (text) {
	    browser.tabs.create({
	    	url: "https://reddit.com/r/" + text
	    })
	});
	
	browser.omnibox.onInputChanged.addListener(function (text, suggest) {
		var suggestions = [];
	
		suggestions.push({ content: 'r/food', description: 'Food' });
		suggestions.push({ content: 'r/cats', description: 'Cats'});
		suggestions.push({ content: 'r/art', description: 'Art' });
	
		suggest(suggestions);
	});
}
