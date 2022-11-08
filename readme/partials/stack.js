const introStackImageTemplate = require("fs").readFileSync(
  __dirname + "/stack-image.md",
  "utf-8"
);

const stack = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/markdown/markdown-original.svg",
];

const stackImages = stack
  .map((imgUrl) => introStackImageTemplate.replace("{IMGURL}", imgUrl))
  .join("");

exports.path = __dirname + "/stack.md";
exports.placeHolders = { stackImages };
