export async function searchOpsIn() {
  await page.goto('https://www.google.co.jp/')
  await page.waitForSelector('input[title="検索"]')
  await page.type('input[title="検索"]', 'オプスイン')
  await page.click('input[value="Google 検索"]')
  await page.waitFor(1000)
  await page.click('a[href="https://ops-in.com/"]')
  await page.waitFor(1000)
  await page.screenshot({ path: 'screenshots/ops-in.png', fullPage: true })
}