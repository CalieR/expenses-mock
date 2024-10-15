const mockData = [
    {
      "id": 1,
      "merchant": "AWS",
      "amount": 1260,
      "description": "Hosting for hobby project",
      "date": "2022-05-24T12:00:00.000Z",
      "category": "training",
      "status": "draft"
    },
    {
      "id": 2,
      "merchant": "Waterstones",
      "amount": 999,
      "description": "Programming book",
      "date": "2022-05-22T12:00:00.000Z",
      "category": "training",
      "status": "draft"
    },
    {
      "id": 3,
      "merchant": "BA",
      "amount": 434.22,
      "description": "Flight",
      "date": "2022-05-04T12:00:00.000Z",
      "category": "travel",
      "status": "draft"
    },
    {
      "id": 4,
      "merchant": "Wasabi",
      "amount": 7.25,
      "description": "Meal for at engineering conference",
      "date": "2022-05-04T12:00:00.000Z",
      "category": "meals",
      "status": "draft"
    }
  ]
  
  const getMockData =  async () => {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
      return Math.ceil(Math.random() * (10 - 1) + 1) > 3 ? resolve(mockData) : reject(new Error('Failed to fetch data'))
     }, 1000)
   })
  }
  
  const getExampleData = async () => {
    const result =  await getMockData()
    console.log(result)
    return result
  }
  
  export default getExampleData;