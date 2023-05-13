const apiKey = 'AIzaSyCzAX6St6SUnKBIeKITeNhpCUZlxj44ZWE'
const sheetId = '1zllNSyjNknAad5RJwYhCKQojqYi3D-gjQys9a1Ao3fI'
const sheetName = 'sheet1'

const dataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?valueRenderOption=FORMATTED_VALUE&key=${apiKey}`

export {
  dataUrl
}