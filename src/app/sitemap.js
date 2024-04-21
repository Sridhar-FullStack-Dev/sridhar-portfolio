export default function sitemap() {
  const currentDate = new Date();
  return [
    {
      url: "https://sridhar-portfolio-ashen.vercel.app",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
