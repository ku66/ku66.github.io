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

var precacheConfig = [["E:/blog/public/about/index.html","aecde60d603f132f8b4a68f7c1776810"],["E:/blog/public/archives/2019/01/index.html","3d408299722059980e719579102053b7"],["E:/blog/public/archives/2019/09/index.html","f0d377dc90ed135b2cd8c8c1558a8e16"],["E:/blog/public/archives/2019/index.html","4938282c91274c259305c67c284dbea2"],["E:/blog/public/archives/index.html","ba8d0bfecd1d9701a08c4ba14e2a94a1"],["E:/blog/public/categories/Linux/index.html","a77bb9dac55975f7514745c52a844c93"],["E:/blog/public/categories/index.html","c3cd32f75e3d48d1c2653a53df86fde0"],["E:/blog/public/categories/相册/index.html","22ca957d24c5594c6d8ff3b92f705b7e"],["E:/blog/public/categories/随笔/index.html","54cea719bfd7cd0cbe66ba0e67dc9ced"],["E:/blog/public/categories/青春/index.html","bcee031a1449593eb1fbae1dfccce123"],["E:/blog/public/css/main.css","d2b7f0c60e24074fefca939adeed1c46"],["E:/blog/public/google0fe5b8a216036990.html","2b6c10e2923d9f1f769d04e1e0643a5f"],["E:/blog/public/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/blog/public/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["E:/blog/public/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["E:/blog/public/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["E:/blog/public/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["E:/blog/public/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["E:/blog/public/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["E:/blog/public/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["E:/blog/public/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["E:/blog/public/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["E:/blog/public/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["E:/blog/public/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["E:/blog/public/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["E:/blog/public/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["E:/blog/public/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["E:/blog/public/index.html","19d632005ef1cc1efa83a7bad0d8e0b4"],["E:/blog/public/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["E:/blog/public/js/bookmark.js","d39d58a179b2487d2bdef17ca191236e"],["E:/blog/public/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["E:/blog/public/js/motion.js","fc06c627f05964e11bead2a912fdcbe2"],["E:/blog/public/js/next-boot.js","e96bcaa1866f1b6b5cf4840335c66f1a"],["E:/blog/public/js/schemes/muse.js","6b0e8a44ac62502f5a31a41935d19725"],["E:/blog/public/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["E:/blog/public/js/utils.js","93cc3e8599c3cbcc2c26fe82538d7587"],["E:/blog/public/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["E:/blog/public/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["E:/blog/public/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["E:/blog/public/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["E:/blog/public/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["E:/blog/public/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["E:/blog/public/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["E:/blog/public/tags/Ubuntu/index.html","dbe14c05ba56ad1b67b862967727f621"],["E:/blog/public/tags/index.html","e252290f2d630c597eab446bce3e6297"],["E:/blog/public/tags/青春文学/index.html","676d86da17fad17668f872194f0083f0"],["E:/blog/public/云朵经过你的城南.html","7c6a7a7508dc60bbfd70dcf0a9b76208"],["E:/blog/public/壁纸分享.html","6867605fa7bab4eca40e64bdbf733f8e"],["E:/blog/public/曾是少年.html","054f218f788477b932da04a3a26b242f"],["E:/blog/public/狐不归.html","db800d9fe082d36bcbfd8b4bc77a2be3"],["E:/blog/public/笨兔兔正传.html","0658dc0d2984ade008bea2a5ab0edfa5"]];
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







