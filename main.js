/* Copyright (C) 2022 Trung Do <dothanhtrung@pm.me> */

const TITLE_FOCUS = "Markdown Focus";
const TITLE_UNFOCUS = "Unfocus";

function toggleMarkdown(tab) {
    function gotTitle(title) {
        if (title === TITLE_FOCUS) {
            browser.tabs.executeScript({file: "markdown_focus.js"})
            browser.pageAction.setTitle({tabId: tab.id, title: TITLE_UNFOCUS});
            browser.pageAction.setIcon({tabId: tab.id, path: "icons/48_enabled.png"});
        } else {
            browser.tabs.executeScript({file: "markdown_unfocus.js"})
            browser.pageAction.setTitle({tabId: tab.id, title: TITLE_FOCUS});
            browser.pageAction.setIcon({tabId: tab.id, path: "icons/48_disabled.png"});
        }
    }

    let gettingTitle = browser.pageAction.getTitle({tabId: tab.id});
    gettingTitle.then(gotTitle);
}

/*
Returns true only if the URL is Gitlab markdown file page
*/
function isGitlabMarkdownUrl(url) {
    return url.match(/-\/blob\/.*\.md/gi);
}


/*
Initialize the page action: set icon and title, then show.
Only operates on tabs whose URL's protocol is applicable.
*/
function initializePageAction(tab) {
    if (isGitlabMarkdownUrl(tab.url)) {
        browser.pageAction.setIcon({tabId: tab.id, path: "icons/48_disabled.png"});
        browser.pageAction.setTitle({tabId: tab.id, title: TITLE_FOCUS});
        browser.pageAction.show(tab.id);
    }
}


/*
When first loaded, initialize the page action for all tabs.
*/
let gettingAllTabs = browser.tabs.query({});
gettingAllTabs.then((tabs) => {
    for (let tab of tabs) {
        initializePageAction(tab);
    }
});


/*
Each time a tab is updated, reset the page action for that tab.
*/
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
    initializePageAction(tab);
});

browser.pageAction.onClicked.addListener(toggleMarkdown);