module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/";

  return {
    pathPrefix,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    }
  };
};
