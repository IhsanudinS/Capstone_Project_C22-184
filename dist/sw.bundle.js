/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-8b6cdeda'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "bundle.js",
    "revision": "5370cf904c6fbd96d732007f94008f9f"
  }, {
    "url": "c89b312ac8205b751d3a.jpg",
    "revision": null
  }, {
    "url": "images/5836.jpg",
    "revision": "8c02c59060790748b8ed52be76404be8"
  }, {
    "url": "images/donate.jpg",
    "revision": "1a89f6adafde5424d7b20f2632a00438"
  }, {
    "url": "images/edu.jpg",
    "revision": "0ddfa3ffa16c86959d8da8c7cae39f2e"
  }, {
    "url": "images/favicon.png",
    "revision": "37a32fe15c6b98b4e3ae8744298319a1"
  }, {
    "url": "images/icons/icon-128x128.png",
    "revision": "22a50cf779c530da86a50b802f128a7a"
  }, {
    "url": "images/icons/icon-144x144.png",
    "revision": "2cd67e48f8a6ac79581017283c92208f"
  }, {
    "url": "images/icons/icon-152x152.png",
    "revision": "7bff23fac775176924c81ef06284eb39"
  }, {
    "url": "images/icons/icon-192x192.png",
    "revision": "d6651beb736931a7ec17446f2bbc40a7"
  }, {
    "url": "images/icons/icon-384x384.png",
    "revision": "78b1e38563427fd14b9cbfaa9e398b19"
  }, {
    "url": "images/icons/icon-512x512.png",
    "revision": "22024e8077b7c18e46ceead00ef7cf65"
  }, {
    "url": "images/icons/icon-72x72.png",
    "revision": "de18d7427daaacd04c94ce9e41ae173c"
  }, {
    "url": "images/icons/icon-96x96.png",
    "revision": "f7b911b48a84e6a931fcec5f799331f4"
  }, {
    "url": "images/learn.jpg",
    "revision": "deaa2a74d08943f24b54676609a4d349"
  }, {
    "url": "images/logo.png",
    "revision": "d7bee512bc45afcbdf92a40fe38dfe0e"
  }, {
    "url": "images/manifest.json",
    "revision": "02d044d292df976b0354f50cc80e000a"
  }, {
    "url": "images/photo.png",
    "revision": "9dc1303daf25cf1245563ce11b5bbecc"
  }, {
    "url": "images/scholarship.jpg",
    "revision": "26198a299b116fdbb0ea5f3b8e6efdcb"
  }, {
    "url": "images/teacher.jpg",
    "revision": "7cdbfea7a68b5d4f74da7a7410590583"
  }, {
    "url": "index.html",
    "revision": "f3acf88f0bc499a6476b8e1fe0ad7ab3"
  }], {});

}));
