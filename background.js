// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript(tab.id,{file: "content_script.js"},function() {
        if (chrome.runtime.lastError) {	
            console.error(chrome.runtime.lastError.message);
        }
    });
});