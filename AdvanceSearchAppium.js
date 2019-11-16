const { remote } = require('webdriverio');
const AdvanceSearch = async function(date,inputsrting1,inputsrting2) {
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

   await browser.url("https://cakes-automation-course-mobile.herokuapp.com/index.html") // nevigate to correct URL
   await browser.pause(3000)
   let getElement = await browser.findElement("id", "advancedSearchIcon") 
   await browser.pause(3000)
   await browser.elementClick(getElement['ELEMENT']) // click on advanced search icon
   await browser.pause(3000)
   let Chocolate = await browser.findElement("css" , '#advancedForm > input:nth-child(2)')
   console.log(Chocolate)
   await browser.elementClick(Chocolate['ELEMENT']) // click on chocolate icon
   await browser.pause(3000)
   let Cheese = await browser.findElement("css" , '#advancedForm > input:nth-child(4)')
   console.log(Cheese)
   await browser.elementClick(Cheese['ELEMENT']) // click on cheese icon
   await browser.pause(3000)
   let mousse = await browser.findElement("css" , '#advancedForm > input:nth-child(6)')
   console.log(mousse)
   await browser.elementClick(mousse['ELEMENT']) // click on mousse icon
   await browser.pause(3000)
   let rationg03 = await browser.findElement("css" , '#advancedForm > input:nth-child(9)')
   console.log(rationg03)
   await browser.elementClick(rationg03['ELEMENT']) // click on rating 03 icon
   await browser.pause(3000)
   let rationg4 = await browser.findElement("css" , '#advancedForm > input:nth-child(11)')
   console.log(rationg4)
   await browser.elementClick(rationg4['ELEMENT']) // click on rating 4 icon
   await browser.pause(3000)
   let rationg5 = await browser.findElement("css" , '#advancedForm > input:nth-child(13)')
   console.log(rationg5)
   await browser.elementClick(rationg5['ELEMENT']) // click on rating 5 icon
   await browser.pause(5000)
   let inputDate = await browser.findElement("css" , '#advancedForm > input.inputDesign.formText.inputDate')
   console.log(inputDate)
   await browser.elementSendKeys(inputDate['ELEMENT'], date) // insert "date" info
   await browser.pause(5000)
   let input1 = await browser.findElement("css" , '#input1')
   console.log(input1)
   await browser.elementSendKeys(input1['ELEMENT'], inputsrting1) // insert string 1
   await browser.pause(3000)
   let input2 = await browser.findElement("css" , '#input2')
   console.log(input2)
   await browser.elementSendKeys(input2['ELEMENT'], inputsrting2) // insert string 2
   await browser.pause(3000)
   let send = await browser.findElement("id" , "btnForm")
   console.log(send)
   await browser.elementClick(send['ELEMENT']) // click on advanced button.
   await browser.pause(5000)
   let textOutput = await browser.findElement("css" , '#advancedSearchWindow > div')
   console.log(textOutput)
   await browser.pause(3000)
   let output = await browser.getElementText(textOutput['ELEMENT'])
   console.log(output)


   if((output.includes("Cohen")) && (output.includes("Doron"))){
       console.log("Output Result Include Data entered")
   }
   else{
       console.log("Output Result not Include Data entered")
   }

   await browser.deleteSession()

}


AdvanceSearch("25/3/1974" , "Doron", "Cohen").catch((e) => console.error(e))