const { remote } = require('webdriverio');
const test = async function(parameter) {
   const browser = await remote({
      logLevel: 'trace',
      capabilities: {
         browserName: 'chrome',
         deviceName: 'emulator-5554',
         platformName: "android",
         platformVersion: "10",
         chromedriverExecutable: 'c:\\users\\Dafna Cohen\\appdata\\roaming\\npm\\node_modules\\appium\\node_modules\\appium-chromedriver\\chromedriver\\win\\chromedriver.exe'
      }
   })
   /////// Write your code here

   await browser.url("https://cakes-automation-course-mobile.herokuapp.com/index.html") // nevigate to cake page
   await browser.pause(3000)
   let getElement = await browser.findElement("id", "searchIcon")
   await browser.pause(3000)
   await browser.elementClick(getElement['ELEMENT']) // click on search icon
   await browser.pause(3000)
   let search = await browser.findElement("id", "searchInput")
   await browser.elementSendKeys(search['ELEMENT'], parameter) // send input string to search field
   await browser.pause(3000)
   let search2 = await browser.findElement("id" , "searchIconButton")
   await browser.elementClick(search2['ELEMENT']) // click on search icon
   await browser.pause(3000)
   let url = await browser.getUrl() // get URL
   await browser.pause(3000)
   if ((parameter == "home") && (url.endsWith("index.html"))) {
      console.log("The Validation success -- url Contain the insert value")
   }
   else if (url.endsWith(parameter +".html")) {
      console.log("The Validation success -- url Contain the insert value") 
   }

   else{
      console.log("validation fail -- url not Contain the insert value")
   }
   

   await browser.deleteSession()

}


test("store").catch((e) => console.error(e))