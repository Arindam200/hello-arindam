#!/usr/bin/env node

function logDetails() {
  const message = "Hey there! I'm Arindam, a Developer Advocate at PIeces.app. I love Writing Articles, building communities, and public speaking!";
  const twitterLink = "https://twitter.com/Arindam_1729";
  const linkedinLink = "https://www.linkedin.com/in/arindam2004/";
  const websiteLink = "https://arindam-majumder.vercel.app";
  const blogLink = "https://arindam1729.hashnode.dev/";

  const colorfulBox = `
\x1b[38;5;51m
\x1b[38;5;105m${message}\x1b[38;5;51m

\x1b[38;5;93mFind me online:\x1b[0m

\x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${twitterLink}\x1b[38;5;51m
\x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}\x1b[38;5;51m
\x1b[38;5;93mPortfolio:\x1b[0m \x1b[38;5;39m${websiteLink}\x1b[38;5;51m
\x1b[38;5;93mBlog:\x1b[0m \x1b[38;5;39m${blogLink}\x1b[38;5;51m
\x1b[0m`;

  console.log(colorfulBox);
}

logDetails();
