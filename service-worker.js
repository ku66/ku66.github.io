/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Software/hexo/public/IDEA 2017.3.4 破解到2099年方法.html","d4ab05a1c05d4b55b7d7dfa550b60946"],["D:/Software/hexo/public/Mybatis(一).html","5a45e97417478d1c3a776a80f12161d8"],["D:/Software/hexo/public/Windows下Git的用法（一）.html","1bc9f58b8461c327f90d81ee0f684a4e"],["D:/Software/hexo/public/Windows下Git的用法（二）.html","f9e17c4cb71ff3c1752c30829c872d31"],["D:/Software/hexo/public/about/index.html","92f2f6a02027edf9c38159e212ddceaa"],["D:/Software/hexo/public/archives/2019/01/index.html","6045a7dcd299aaa87c99004dca61c2d8"],["D:/Software/hexo/public/archives/2019/02/index.html","7859da05638cc32758ab7e3071a21d7a"],["D:/Software/hexo/public/archives/2019/index.html","7329489a6ce0a01920a8909057d1335e"],["D:/Software/hexo/public/archives/2019/page/2/index.html","e734249f4bac9a6a03de66f2b1345ffd"],["D:/Software/hexo/public/archives/index.html","f1ba41133b629a179c1982a0310c882c"],["D:/Software/hexo/public/archives/page/2/index.html","920842c241cc04ed9c12226d57894a34"],["D:/Software/hexo/public/categories/Git/index.html","c410ee35a8d887a921329693903bc36d"],["D:/Software/hexo/public/categories/IDEA/index.html","c5e06737d377ad6b9b8e70ff6184e59f"],["D:/Software/hexo/public/categories/Linux/index.html","b65d7841358c8500177e314c4b082dd2"],["D:/Software/hexo/public/categories/aria2/index.html","f88eff82acf548c36fb23d1726f5a601"],["D:/Software/hexo/public/categories/index.html","60c266de7115d7de9f96de45600724a7"],["D:/Software/hexo/public/categories/小技巧/index.html","3df6921137e619c192c35aec072df1cc"],["D:/Software/hexo/public/categories/浏览器/index.html","1b6de2ca3bdfb82a8ce52ca948bd77c5"],["D:/Software/hexo/public/categories/相册/index.html","85a636ecda7e64eaf11e489049caa77a"],["D:/Software/hexo/public/categories/随笔/index.html","3b540bd8c8d862272c82998e7bd5e8dd"],["D:/Software/hexo/public/css/main.css","e889ef6e2ff2074c291684774790c969"],["D:/Software/hexo/public/google0fe5b8a216036990.html","986ebcd0ff5704c2101ecb284b9655c3"],["D:/Software/hexo/public/images/aaa.jpg","b4e819387007ae3f3e848b6a40d1e7dc"],["D:/Software/hexo/public/images/aipay.jpg","dd92db8ee155f9681dade418f8992cb8"],["D:/Software/hexo/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Software/hexo/public/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["D:/Software/hexo/public/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["D:/Software/hexo/public/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["D:/Software/hexo/public/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["D:/Software/hexo/public/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["D:/Software/hexo/public/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["D:/Software/hexo/public/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["D:/Software/hexo/public/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["D:/Software/hexo/public/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["D:/Software/hexo/public/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["D:/Software/hexo/public/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["D:/Software/hexo/public/images/header.jpg","cfab3cb0f46171b24626a6e7d2230377"],["D:/Software/hexo/public/images/icon1.gif","4c56720813941636de536a8a60453b3f"],["D:/Software/hexo/public/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["D:/Software/hexo/public/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["D:/Software/hexo/public/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["D:/Software/hexo/public/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["D:/Software/hexo/public/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["D:/Software/hexo/public/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["D:/Software/hexo/public/images/wechat.png","bef2d7f7d832ea4f8f54bf8f7bf1956a"],["D:/Software/hexo/public/index.html","2116e4fe73c3188faa4ec745c2714fb1"],["D:/Software/hexo/public/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["D:/Software/hexo/public/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["D:/Software/hexo/public/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["D:/Software/hexo/public/js/src/crash_cheat.js","2bfb3c744fdfd0b700647b504d925414"],["D:/Software/hexo/public/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["D:/Software/hexo/public/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["D:/Software/hexo/public/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["D:/Software/hexo/public/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["D:/Software/hexo/public/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["D:/Software/hexo/public/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["D:/Software/hexo/public/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["D:/Software/hexo/public/js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["D:/Software/hexo/public/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["D:/Software/hexo/public/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/Software/hexo/public/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Software/hexo/public/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Software/hexo/public/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["D:/Software/hexo/public/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["D:/Software/hexo/public/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["D:/Software/hexo/public/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["D:/Software/hexo/public/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["D:/Software/hexo/public/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["D:/Software/hexo/public/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["D:/Software/hexo/public/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["D:/Software/hexo/public/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["D:/Software/hexo/public/page/2/index.html","04a49aee40a1df701dfef9984a60b1f0"],["D:/Software/hexo/public/tags/Ubuntu/index.html","75c8c0f1986093dd96d4d5dfba216dfb"],["D:/Software/hexo/public/tags/index.html","9f334d69e5dee4e5402b338c0eb1ef09"],["D:/Software/hexo/public/win10下安装两个JDK以及IDEA切换JDK的方法.html","4575d666c9cc3a23d1212a39432d713a"],["D:/Software/hexo/public/在windows上搭建不限速下载神器aria2.html","18085fd632806d203e3e51346f570c59"],["D:/Software/hexo/public/壁纸分享.html","1f8ebd914a264771eea6f50a90e9c6c6"],["D:/Software/hexo/public/曾是少年.html","a4e2e85a7251449d46c35e3761eaeb5a"],["D:/Software/hexo/public/浏览器提取已安装扩展教程.html","a60e65018c37da578f14d076bac04d40"],["D:/Software/hexo/public/狐不归.html","a88f172b961a66b403ced8f565acfc50"],["D:/Software/hexo/public/用HTML解决MarkDown的两个痛点.html","874bb8b5192b981b01d1e8e0c9b02679"],["D:/Software/hexo/public/笨兔兔正传.html","f14b8c5baeb095148a98369a67fae04d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







