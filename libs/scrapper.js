import puppeteer from 'puppeteer';

export const Scrapper = async (url) => {
  const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(url);
  // await page.goto(url, {waitUntil: 'networkidle0'});
  const html = await page.content();
  await browser.close();
  return html;
};

// const autoScroll = async (page:any) => {
//   await page.evaluate(async () => {
//     await new Promise((resolve, reject) => {
//       let totalHeight = 0
//       let distance = 100
//       let timer = setInterval(() => {
//         let scrollHeight = document.body.clientHeight
//         window.scrollBy(0, distance)
//         totalHeight += distance
//         if(totalHeight >= scrollHeight){
//           clearInterval(timer)
//           resolve()
//         }
//       }, 100);
//     })
//   })
// };