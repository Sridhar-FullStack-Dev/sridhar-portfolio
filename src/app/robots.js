export default function robots() {
  return {
    rules: [
      {
        userAgent: ["*", "Yahoo Pipes 1.0", "Facebot", "externalfacebookhit"],
        disallow: ["/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Video",
          "Applebot",
          "bingbot",
          "Baiduspider",
          "Baiduspider-mobile",
          "Baiduspider-video",
          "Baiduspider-image",
          "NaverBot",
          "Y!J-WSC",
          "YJ-WSC",
          "Yeti",
          "Yandex",
          "YandexBot",
          "YandexMobileBot",
          "YandexVideo",
          "YandexWebmaster",
          "YandexSitelinks",
          "SeznamBot",
          "AdsBot-Google",
          "Twitterbot",
          "Adidxbot",
        ],
        allow: ["/", "/featured-products"],
        disallow: ["/private/"],
      },
    ],
    sitemap: "https://sridhar-portfolio-ashen.vercel.app",
  };
}
