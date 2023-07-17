import fs from 'fs'

function convertToCSV (data) {
  const columns = ['Title', 'VOD Service', 'Rating']
  const rows = data.map(({
    title,
    vodService,
    rating
  }) => {
    return [title, vodService, rating]
  })
  const csvData = [columns, ...rows].map(row => row.join(',')).join('\n')
  return csvData
}

async function saveCSV (data, fileName) {
  try {
    const csvData = convertToCSV(data)
    await fs.promises.writeFile(fileName, csvData, 'utf8')
    console.log(`Results saved to ${fileName}`)
  } catch (error) {
    console.error('Error saving CSV:', error)
  }
}

export default saveCSV
