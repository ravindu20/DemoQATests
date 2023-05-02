
/*this method used to generate random numbers within given range
 min : min number of the range
 max : max number if the range
 */
export function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function excelDataToJsonFile() {

  const xlsx = require("xlsx")
  const fs = require("fs")
  const filePath = "./cypress/fixtures/data.xlsx"
  const sheetName = "Sheet1"
  const jsonFilePath = "./cypress/fixtures/dataJson.json"

  // task - Read data from excel and store into JSON file
  // Step 1 - Read excel file
  const wb = xlsx.readFile(filePath)

  // Step 2 - Read sheet from workbook
  const ws = wb.Sheets[sheetName]
  //console.log(ws)

  //Step 3 - Read excel data and convert it into json
  const data = xlsx.utils.sheet_to_json(ws)
  //console.log(data)

  //Step 4 - Write json data into json file by stringifying data
  let newData = []
  newData = data.map((d) => {
    return d
  })
  fs.writeFileSync(jsonFilePath, JSON.stringify(newData, null, 2))
}