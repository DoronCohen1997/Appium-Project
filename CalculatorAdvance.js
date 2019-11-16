const { remote } = require('webdriverio');
const calc1 = async function(parameter) {
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
      console.log(getElement)
      await browser.elementClick(getElement['ELEMENT']) // click on calculator icon
      await browser.pause(3000)
      let digit_1 = await browser.findElement("id", "com.google.android.calculator:id/digit_1") 
      console.log(digit_1)
      await browser.elementClick(digit_1['ELEMENT']) // click on "1" digit.
      await browser.pause(3000)
      let digit_5 = await browser.findElement("id", "com.google.android.calculator:id/digit_5")
      console.log(digit_5)
      await browser.elementClick(digit_5['ELEMENT']) // click on "5" digit.
      await browser.pause(3000)
      let digit_0 = await browser.findElement("id", "com.google.android.calculator:id/digit_0")
      console.log(digit_0)
      await browser.elementClick(digit_0['ELEMENT']) // click on "0" digit.
      await browser.pause(3000)
      let divide = await browser.findElement("id", "com.google.android.calculator:id/op_div")
      console.log(divide)
      await browser.elementClick(divide['ELEMENT']) // click on "/" digit.
      await browser.pause(3000)
      let digit_3 = await browser.findElement("id", "com.google.android.calculator:id/digit_3")
      console.log(digit_3)
      await browser.elementClick(digit_3['ELEMENT']) // click on "3" digit.
      await browser.pause(3000)
      await browser.elementClick(digit_0['ELEMENT']) // click on "0" digit.
      await browser.pause(3000)

      let back = await browser.findElement("id", "com.google.android.calculator:id/del")
      console.log(back)
      await browser.elementClick(back['ELEMENT']) // click on "back" digit.
      await browser.pause(3000)

      let equal = await browser.findElement("id" , "com.google.android.calculator:id/eq")
      await browser.elementClick(equal['ELEMENT']) // // click on "=" digit.
      await browser.pause(3000)
      let result = await browser.findElement("id" , "com.google.android.calculator:id/result_final") 
      console.log(result)
      let finalResult = await browser.getElementText(result['ELEMENT']) // get final result element.
      if (finalResult == 50) {
          console.log("the Action of Calculator Success")
      }
      else{
          console.log("the Action of Calculator Fail")
      }

      await browser.takeScreenshot() 

      await browser.deleteSession()

}

calc1("home").catch((e) => console.error(e))