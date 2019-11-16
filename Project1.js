const { remote } = require('webdriverio');
(async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome',
            deviceName: 'emulator-5554', 
            platformName: "android",
            platformVersion: "10",
            chromedriverExecutable: 'c:\\users\\Dafna Cohen\\appdata\\roaming\\npm\\node_modules\\appium\\node_modules\\appium-chromedriver\\chromedriver\\win\\chromedriver.exe'
        }
    })
   /////// Write your code here

   await browser.url("https://duckduckgo.Com") // nevigate to website
   await browser.pause(3000)
   let search = await browser.findElement("id" , "search_form_input_homepage")
   await browser.pause(3000)
   await browser.elementSendKeys(search['ELEMENT'], "webdriverio") // send "webdriverio" string to relevant field
   await browser.pause(3000)
   let search1 = await browser.findElement("id" , "search_button_homepage")
   await browser.elementClick(search1['ELEMENT']) // click on search button
   await browser.pause(3000)
   let title = await browser.getTitle() // get title from top page
   console.log(title)





   //await browser.elementSendKeys(search,["webdriverio"])
   

   await browser.deleteSession()
})().catch((e) => console.error(e))
