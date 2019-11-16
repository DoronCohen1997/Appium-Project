const { remote } = require('webdriverio');
const mail = async function(DestinationMail) {
   const browser = await remote({
      logLevel: 'trace',
      capabilities: {
         //browserName: 'android',
         deviceName: 'emulator-5554',
         platformName: "android",
         platformVersion: "10",
         //chromedriverExecutable: 'c:\\users\\Dafna Cohen\\appdata\\roaming\\npm\\node_modules\\appium\\node_modules\\appium-chromedriver\\chromedriver\\win\\chromedriver.exe'
         appPackege: "com.google.android.gm",
         appActivity: "com.google.android.gm.ConversationListActivityGmail",
         automationName: "UiAutomator2"
         
      }
   })
   /////// this Function send Mail with Success GIF

      let getElement = await browser.findElement("xpath", "//android.widget.TextView[@content-desc='Gmail']") // Find Gmail Icon
      await browser.pause(3000)
      await browser.elementClick(getElement['ELEMENT']) // click on Gmail Icon
      await browser.pause(3000) 
      let elm=await browser.$("~Compose")
      await browser.pause(6000)
      await browser.elementClick(elm['elementId']) // Click on Compose Button
      await browser.pause(5000)
      let inputMail = await browser.findElement("id", "com.google.android.gm:id/to") // Find Field to Send Mail (Destination)
      await browser.elementSendKeys(inputMail['ELEMENT'] ,DestinationMail) // Insert Destination Mail
      await browser.pause(5000)
      let Subject = await browser.findElement("id" , "com.google.android.gm:id/subject") // Find Field to Insert Subject
      await browser.elementSendKeys(Subject['ELEMENT'] ,"Email Exercise") // Insert Subject
      await browser.pause(5000)
      let compose = await browser.findElement("xpath" , "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.widget.EditText")
      await browser.elementClick(compose['ELEMENT'])
      await browser.pause(5000)
      let Attach = await browser.findElement("id" , "com.google.android.gm:id/add_attachment") // Find Attach Button
      await browser.elementClick(Attach['ELEMENT']) // Click Attach Button
      await browser.pause(8000)
      let attachFile = await browser.findElement("xpath" , "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView")
      await browser.elementClick(attachFile['ELEMENT']) // Click On "Attach File" Option
      await browser.pause(8000)
      let Icon = await browser.findElement("xpath" , "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView")
      await browser.elementClick(Icon['ELEMENT']) // Click On Selected Icon
      await browser.pause(5000)
      let send = await browser.findElement("id" , "com.google.android.gm:id/send") // Find Send Icon
      await browser.elementClick(send['ELEMENT']) // Click On Send Icon
      await browser.pause(5000)


     await browser.deleteSession()

    }

    
    mail("tami44000@walla.co.il").catch((e) => console.error(e))

  