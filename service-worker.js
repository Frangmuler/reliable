/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "942ac030d7865b9233c3abf3f7ceadd8"
  },
  {
    "url": "assets/css/0.styles.12e6c1f6.css",
    "revision": "242cc682b72e89ac0ab5fa1c6893767f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7d125ea9.js",
    "revision": "5f576c59b59246771169b69d97a06341"
  },
  {
    "url": "assets/js/11.2520cd70.js",
    "revision": "83fd0be339b25701c70d8b9265fec9d9"
  },
  {
    "url": "assets/js/12.aa7f532b.js",
    "revision": "25fb3f0f046e0a070945dc5a6b88c808"
  },
  {
    "url": "assets/js/13.86be76c2.js",
    "revision": "c6b24cadd6f66e3bcb9b978aec228483"
  },
  {
    "url": "assets/js/14.ece670e4.js",
    "revision": "244f8502188a7739cae5478715cf3afe"
  },
  {
    "url": "assets/js/15.769349e7.js",
    "revision": "e5dda1c8f8f48d44d548997b8fc1847d"
  },
  {
    "url": "assets/js/16.6e36544f.js",
    "revision": "c19c721f42e0f4726ef836230c957607"
  },
  {
    "url": "assets/js/17.a180cec9.js",
    "revision": "3539a502749b57d67c4af50aa656ac6d"
  },
  {
    "url": "assets/js/18.dabc1a11.js",
    "revision": "cb76771c8079c0eb57dc2d46f4818c63"
  },
  {
    "url": "assets/js/19.e12816de.js",
    "revision": "024eb573716d9700a4242494e5e476f3"
  },
  {
    "url": "assets/js/2.bdd4d04c.js",
    "revision": "32681e85601cbe6fd720212f94b5aa43"
  },
  {
    "url": "assets/js/20.2f29b7db.js",
    "revision": "06c8994d78fa1802467ee5a1c8128e2f"
  },
  {
    "url": "assets/js/21.fe21ff65.js",
    "revision": "117e545c64a4124962be3d978c9e6988"
  },
  {
    "url": "assets/js/3.47a144ec.js",
    "revision": "1d68bcb84c0211353f91dc723c79fe23"
  },
  {
    "url": "assets/js/4.1b0fd2c8.js",
    "revision": "3fc9b1e9228e7edb2bf6c5f0b41164a8"
  },
  {
    "url": "assets/js/5.4f976dfe.js",
    "revision": "482c1b593e1219799aede7063e0f32aa"
  },
  {
    "url": "assets/js/6.b6f842ef.js",
    "revision": "a5471335c4c9a69b813bcc97fbcb16c5"
  },
  {
    "url": "assets/js/7.1d61c67b.js",
    "revision": "c4d1da9293033ffe6ea277bbe8591bec"
  },
  {
    "url": "assets/js/8.70eb87d8.js",
    "revision": "624d9cd0019f74f62b99c8e48aa7464d"
  },
  {
    "url": "assets/js/9.62c1aed0.js",
    "revision": "b97c526465c53ac6bd6f8c67370dca15"
  },
  {
    "url": "assets/js/app.353d0e33.js",
    "revision": "4f185bb45db6de35c06144b3f6c20cd3"
  },
  {
    "url": "guide/index.html",
    "revision": "1cdef2c57444a16c0323d016792bd3cb"
  },
  {
    "url": "guide/integrate-with-gitlab-ci.html",
    "revision": "4ae38b52dc1b623aaa87b4fec3692068"
  },
  {
    "url": "guide/integrate-with-jenkins.html",
    "revision": "e6832aa26a3ff16fb6dc20c61f28ebbd"
  },
  {
    "url": "guide/jenkins-android.html",
    "revision": "9ee9b9cc2a72f7437a5288d639c4bdba"
  },
  {
    "url": "guide/jenkins-ios.html",
    "revision": "a79841b170c194fb8387de4ace74c06e"
  },
  {
    "url": "guide/jenkins-web.html",
    "revision": "cf16c5e9040a4c66816f763b21c81fc4"
  },
  {
    "url": "guide/reliable-cli.html",
    "revision": "675758e7eea0594569601cb17b88e54a"
  },
  {
    "url": "guide/reliable-web-deploy.html",
    "revision": "e6b4f0ab2c4a5f651a956d0f6c38e1bf"
  },
  {
    "url": "index.html",
    "revision": "e5450f9fb773855e525a0e448b850888"
  },
  {
    "url": "logo/reliable.svg",
    "revision": "b34e8a8f81b1ba112b58e859061f289c"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "79bde956bc38dd335194242120db10c9"
  },
  {
    "url": "zh/guide/integrate-with-gitlab-ci.html",
    "revision": "4d126f080405841140b542cd41e2bd70"
  },
  {
    "url": "zh/guide/integrate-with-jenkins.html",
    "revision": "3ba6504bb8ee6967824b84a0339efb49"
  },
  {
    "url": "zh/guide/jenkins-android.html",
    "revision": "9806fa652079ad38c488e8f0c3de8cbc"
  },
  {
    "url": "zh/guide/jenkins-ios.html",
    "revision": "dd12040d1931f6b6578f1a575bc30a46"
  },
  {
    "url": "zh/guide/jenkins-web.html",
    "revision": "6c08101317eb346859a964431f347528"
  },
  {
    "url": "zh/guide/reliable-cli.html",
    "revision": "1dda3f251b498d505c5d9dd7dc900344"
  },
  {
    "url": "zh/guide/reliable-web-deploy.html",
    "revision": "818d9ccdd62a3be802e50df5a05761e9"
  },
  {
    "url": "zh/index.html",
    "revision": "35c3e5683382afe9dbfe0c53f81d1c34"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
