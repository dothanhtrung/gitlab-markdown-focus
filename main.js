const TITLE_FOCUS = "Markdown focus";
const TITLE_UNFOCUS = "Unfocus";

function toggleMarkdown(tab) {
    function gotTitle(title) {
        if (title === TITLE_FOCUS) {
            browser.tabs.executeScript({file: "markdown_focus.js"})
            
            browser.pageAction.setTitle({tabId: tab.id, title: TITLE_UNFOCUS});
        } else {
            browser.pageAction.setTitle({tabId: tab.id, title: TITLE_FOCUS});
            browser.tabs.executeScript({file: "markdown_unfocus.js"})
        }
    }

    let gettingTitle = browser.pageAction.getTitle({ tabId: tab.id });
    gettingTitle.then(gotTitle);
}

/*
Returns true only if the URL's protocol is in APPLICABLE_PROTOCOLS.
Argument url must be a valid URL string.
*/
function protocolIsApplicable(url) {
    const protocol = (new URL(url)).protocol;
    return APPLICABLE_PROTOCOLS.includes(protocol);
}


/*
Initialize the page action: set icon and title, then show.
Only operates on tabs whose URL's protocol is applicable.
*/
function initializePageAction(tab) {
    // if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/icon.png" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_FOCUS });
        browser.pageAction.show(tab.id);
    // }
}

/*
Each time a tab is updated, reset the page action for that tab.
*/
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
    initializePageAction(tab);
  });

/*
When first loaded, initialize the page action for all tabs.
*/
let gettingAllTabs = browser.tabs.query({});
gettingAllTabs.then((tabs) => {
    for (let tab of tabs) {
        initializePageAction(tab);
        // console.log(tab);
    }
});

browser.pageAction.onClicked.addListener(toggleMarkdown);