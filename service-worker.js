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

var precacheConfig = [["D:/Software/hexo/public/Mybatis(一).html","cd6f3ac7714f208a7936e77f1e48178a"],["D:/Software/hexo/public/about/index.html","1265396e4589ddade7f7364af224a231"],["D:/Software/hexo/public/archives/2019/01/index.html","1e2751bfe7ed30221a48baa38ac3aa68"],["D:/Software/hexo/public/archives/2019/01/page/2/index.html","5cc196f1d76acb6863ea54ef1efc3c0b"],["D:/Software/hexo/public/archives/2019/index.html","6d1fc228fcd57b2ecc627dd30df3f520"],["D:/Software/hexo/public/archives/2019/page/2/index.html","4120e587f837fcbf00c9d456dfe3e623"],["D:/Software/hexo/public/archives/index.html","a688c40fbb909f447288aaa2c4890036"],["D:/Software/hexo/public/archives/page/2/index.html","94c980bafe987c1c8065adebd4091b11"],["D:/Software/hexo/public/categories/Linux/index.html","cd5867e72727fe4869df69dc4ff3e4b6"],["D:/Software/hexo/public/categories/index.html","ff7e319b0d0681a4962f91f56a5c9665"],["D:/Software/hexo/public/categories/小技巧/index.html","c8f4728c507276e9811dbc11aca1e7ec"],["D:/Software/hexo/public/categories/相册/index.html","43702c8f489106dc8faf998116e71d70"],["D:/Software/hexo/public/categories/随笔/index.html","9e8aeb326bc9dcfacbbcaf55286ddeea"],["D:/Software/hexo/public/css/main.css","76fd0d9bc8bf98a78826968f8887b3fb"],["D:/Software/hexo/public/google0fe5b8a216036990.html","0dd8fbe9b323075db4591585e445e6a4"],["D:/Software/hexo/public/images/aaa.jpg","b4e819387007ae3f3e848b6a40d1e7dc"],["D:/Software/hexo/public/images/aipay.jpg","dd92db8ee155f9681dade418f8992cb8"],["D:/Software/hexo/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Software/hexo/public/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["D:/Software/hexo/public/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["D:/Software/hexo/public/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["D:/Software/hexo/public/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["D:/Software/hexo/public/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["D:/Software/hexo/public/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["D:/Software/hexo/public/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["D:/Software/hexo/public/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["D:/Software/hexo/public/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["D:/Software/hexo/public/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["D:/Software/hexo/public/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["D:/Software/hexo/public/images/header.jpg","cfab3cb0f46171b24626a6e7d2230377"],["D:/Software/hexo/public/images/icon1.gif","4c56720813941636de536a8a60453b3f"],["D:/Software/hexo/public/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["D:/Software/hexo/public/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["D:/Software/hexo/public/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["D:/Software/hexo/public/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["D:/Software/hexo/public/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["D:/Software/hexo/public/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["D:/Software/hexo/public/images/wechat.png","bef2d7f7d832ea4f8f54bf8f7bf1956a"],["D:/Software/hexo/public/index.html","b2950cd0ba2c512c615848fc98e5c894"],["D:/Software/hexo/public/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["D:/Software/hexo/public/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["D:/Software/hexo/public/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["D:/Software/hexo/public/js/src/crash_cheat.js","2bfb3c744fdfd0b700647b504d925414"],["D:/Software/hexo/public/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["D:/Software/hexo/public/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["D:/Software/hexo/public/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["D:/Software/hexo/public/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["D:/Software/hexo/public/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["D:/Software/hexo/public/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["D:/Software/hexo/public/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["D:/Software/hexo/public/js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["D:/Software/hexo/public/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["D:/Software/hexo/public/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/Software/hexo/public/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Software/hexo/public/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Software/hexo/public/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["D:/Software/hexo/public/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["D:/Software/hexo/public/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["D:/Software/hexo/public/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["D:/Software/hexo/public/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["D:/Software/hexo/public/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["D:/Software/hexo/public/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["D:/Software/hexo/public/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["D:/Software/hexo/public/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["D:/Software/hexo/public/page/2/index.html","0bde98e6c6db04f7d0d9e18b6f854a78"],["D:/Software/hexo/public/tags/Ubuntu/index.html","db4371fb04722953a8a2b3008d9f820b"],["D:/Software/hexo/public/tags/index.html","f532dd78ad9c18d72b2dba2c44dd27b2"],["D:/Software/hexo/public/tags/文化/index.html","7c74eb87f43f32354e1d199d8291f09d"],["D:/Software/hexo/public/tags/经济/index.html","1d08ae81e8ed2d7c571955ba3bbc67e6"],["D:/Software/hexo/public/tags/西游/index.html","cf64c7d1b0367ef8dc12f0d2283bd2c8"],["D:/Software/hexo/public/信神和信宗教有什么区别？.html","e1cb4cec7f83e204bb0de74263d61fca"],["D:/Software/hexo/public/壁纸分享.html","8e1a21f55cce549c0786ea9026fbe4c5"],["D:/Software/hexo/public/我眼中的西游.html","9aeb34afc92335ddca906f1af5cedec2"],["D:/Software/hexo/public/斗胆谈一谈中国人的圣君思想.html","e4378e0a8d8ca19956c925f02c716acc"],["D:/Software/hexo/public/曾是少年.html","3e66b20550fec38371d9f91643ab3fb2"],["D:/Software/hexo/public/浅谈2019国内经济.html","fb6da624d6884c1aba0776ee0fc9f7ee"],["D:/Software/hexo/public/狐不归.html","c17f9a3473198958603ecbaa72616459"],["D:/Software/hexo/public/用HTML解决MarkDown的两个痛点.html","696ffa81a4ecca3042bc618ace78c3b3"],["D:/Software/hexo/public/由青蛙王子想到猪八戒.html","451df21103264810d8d53e4123ef147d"],["D:/Software/hexo/public/笨兔兔正传.html","a5107693c90791bc638f900094460075"],["D:/Software/hexo/public/那些年，我看，我想.html","0de13d44bc9d113e609ff90a79d0dd65"]];
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







