'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ab451fef6bfb9d0d52b440a2ca1b67c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "690b92a2b81dbfab43ba72ac0f5627c8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3a89447c2b4b0561629e7006fe151713",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c52c47648f8b22ed7c2e366addeeb222",
".git/logs/refs/heads/main": "b10d4e0ac5636ca6ee7a4f12496ae016",
".git/logs/refs/remotes/origin/main": "0145950f420f3c8ca82b1487f7ea6d0f",
".git/objects/11/011bd5bdf2b09724eed47e2dcfdd90ec5e5495": "8383aac34644f92a3c8ee179bec6a0a1",
".git/objects/1b/432be58e2f19e0af7699ba401feaa60c8e286b": "3052f1eff7f72b3ecb4a461d95357845",
".git/objects/24/a7a12eca89fb84389235ebb2e8965408d427ee": "7bebc446485063d503943ffc291fed1a",
".git/objects/2a/001c60139a45768787943ba80540e0d8511e8b": "c7cffbba26e8691db53050cb3cb232d2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3c/178325185ee70f563389c9c5f411c42147f6ae": "eda0c14654f357fe865e646126e6994f",
".git/objects/45/3e47f544b43190a10d56ef1ae6b76b74d3536e": "ffdf39ba888dba65064e5c85e7525840",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/b4395dd6f88b80d79cf55bc5094c1d05d930c7": "fc865086c7d1e5d6165309cf1dec753f",
".git/objects/59/1e69fd015b68e3d98c4ece391df6bd1de53c4c": "5fea5a6906eb6b5f511e3b41091bc40d",
".git/objects/62/958140bf832a9af228ecc833a295f865934e06": "5c96a2872bdaceee0308ed73b50c62a0",
".git/objects/65/fb5ec4466385ce98b4f461e57470ae0f961b99": "23b6053406a2dea2884f15c0e5029bf0",
".git/objects/67/99eaa19b65da3ef91d1aaf9817887319a80c78": "f62447d903416b6c7899fdbbad4f446d",
".git/objects/70/4c6ca96a47f4cc752407e06f202c5bef1a99c4": "11f20175508356a2703e584a480c83f1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/b5cf97ef65ad8c19d62fe12ea3dc7cdac3cdb5": "b21864557812946892798e73832d771d",
".git/objects/81/5832317ed1570ca50a5598079b3e5327489dc0": "414dbd4213fd4465584826c297e669e6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b7bdbbc805b505974485f43b03da5f98404c82": "408705d36206fcea64aa65b456d68374",
".git/objects/90/43a1a6bc5756b7cf6ee09b1a17be2924b26478": "b61ae7ea3a935f3b34328a1c41c9d0c6",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/93/bfef1c38fb6c9e814af09e00d4f13cee5afc92": "564ee2c7446f9d3542e2d8a58bef399d",
".git/objects/97/00f02c17ccb20f29b2020ca2fe993d98a87c36": "e947aa6a0f7779b307e01d2c51b5c01a",
".git/objects/97/20be20fd8a303a1a5361299bd40aa24f36bcea": "ab07f4b17c433011aa592728627648d6",
".git/objects/98/88439cc47469bbabbd27ec120fed3a680df2c9": "268ed580a0c7381f14028382023d65f9",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/5b43bb4979b0581712ff8c4caa27923aa45921": "26023d515e098e82fdf704546e3e1514",
".git/objects/c5/6dfb3c19a08de79050e79256ee5b4f6ea9981f": "692e1368fd6e03c03bd769f3a3134b08",
".git/objects/c7/c2e6b3bf0bfbabf5f846e6f4549e964f611cd2": "7e6163475fb8e8962f12e1a13ed67bb7",
".git/objects/c9/18a5342802e385468cb12c2d751a8d909cb34e": "20ab87e948cc0632c9e376a6a72b3933",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/09bc5220ff75a53e813c6de8132fdb20459658": "6ba8a36d68e2fea7da7fb0b3d69c56eb",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/e8766996dc1b9c48ebfb1cddc70be2dc0224ce": "0ff411abe6661618fbeca2dfc23030da",
".git/objects/f3/a67d0279b259dff2b6699e2fe9072f753222fa": "de7b34c3b8e4cbd94fcf6ac4413a4f8e",
".git/objects/fd/51fdca79c74fc9b08d27a8e60e6b36b9b61dca": "4f68bc3718791d6ac275ed4379b9579f",
".git/refs/heads/main": "fdfad4404c847c160f9322c04083bb01",
".git/refs/remotes/origin/main": "70c54618ac26fb7e15183f71112ba096",
"assets/AssetManifest.json": "a0d93e52e35cae6870f90ae4b5ca63f5",
"assets/assets/android.png": "ac215e0e232a70c6b07a9cb4bf7f87ad",
"assets/assets/facebook_clone.JPG": "2010a7b2b1bd60d9baf624c23ecdc7aa",
"assets/assets/firebase.png": "aa59e72cc473325bc59a36029c6922ab",
"assets/assets/flutter.png": "a06ec7845e05586d6f4427dae933d8f9",
"assets/assets/instagram_clone2.JPG": "17de802322ca49f327bf0c53362d0257",
"assets/assets/linkedin.png": "2c7f194eac13ed44b36d520e046d7a91",
"assets/assets/profile_pic.png": "045c5307a4437808e6ee9ba03259dc2c",
"assets/assets/visitor.JPG": "d4107ad794d678d330e437bd7aef4b24",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/loading.gif": "4eedc3df51b38982780764a53628388a",
"assets/NOTICES": "e579b1a365c20f999e64d1cc6047891d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "43af7d9d1df2676ff36e887dfedd9b36",
"/": "43af7d9d1df2676ff36e887dfedd9b36",
"main.dart.js": "c18e426a446ea9cb2e81dfe943dd220e",
"manifest.json": "8bc39948c1595765fc6f69f395993155",
"version.json": "3fe4fd5df2020acccdd334a29a3cc4f4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
