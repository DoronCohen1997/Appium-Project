const { remote } = require('webdriverio');
const calc = async function(parameter) {
   const browser = await remote({
      logLevel: 'trace',
      capabilities: {
         //browserName: 'android',
         deviceName: 'emulator-5554',
         platformName: "android",
         platformVersion: "10",
         //chromedriverExecutable: 'c:\\users\\Dafna Cohen\\appdata\\roaming\\npm\\node_modules\\appium\\node_modules\\appium-chromedriver\\chromedriver\\win\\chromedriver.exe'
         appPackege: "com.android.calculator2",
         appActivity: "com.android.calculator2.Calculator",
         automationName: "UiAutomator2"
         
      }
   })
   /////// Write your code here

      let getElement = await browser.findElement("xpath", "//android.widget.TextView[@content-desc='Calculator']") // find calculator icon
      await browser.pause(3000)
      await browser.elementClick(getElement['ELEMENT']) // click on calculator icon
      await browser.pause(3000)
      let digit_4 = await browser.findElement("id", "com.google.android.calculator:id/digit_4")
      await browser.elementClick(digit_4['ELEMENT']) // click on "4" digit.
      await browser.pause(3000)
      let multiply = await browser.findElement("id", "com.google.android.calculator:id/op_mul")
      await browser.elementClick(multiply['ELEMENT']) // click on "multiply" digit.
      await browser.pause(3000)
      let digit_5 = await browser.findElement("id", "com.google.android.calculator:id/digit_5")
      await browser.elementClick(digit_5['ELEMENT']) // // click on "5" digit.
      await browser.pause(3000)
      let equal = await browser.findElement("id", "com.google.android.calculator:id/eq")
      await browser.elementClick(equal['ELEMENT']) // // click on "=" digit.
      await browser.pause(3000)
      let plus = await browser.findElement("id", "com.google.android.calculator:id/op_add")
      await browser.elementClick(plus['ELEMENT']) // click on "+" digit.
      await browser.pause(3000)
      let digit_3 = await browser.findElement("id", "com.google.android.calculator:id/digit_3")
      await browser.elementClick(digit_3['ELEMENT']) // click on "3" digit.
      await browser.pause(3000)
      await browser.elementClick(equal['ELEMENT']) // click on "=" digit.
      await browser.pause(3000)
      let result = await browser.findElement("id" , "com.google.android.calculator:id/result_final")
      let finalResult = await browser.getElementText(result['ELEMENT']) // get final result element.
      if (finalResult == 23) {
          console.log("the Action of Calculator Success")
      }
      else{
          console.log("the Action of Calculator Fail")
      }

      await browser.takeScreenshot() 

      await browser.deleteSession()

}

calc("home").catch((e) => console.error(e))