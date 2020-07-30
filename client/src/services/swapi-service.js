
//Отправляем запрос на логин.
const authIn = async (url="/api/", method={}, body=null) => {
  try {
    const response = await fetch(url, {
        method, 
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      })

    return await response.json();
    
  } catch(e) {
    console.log('Sorry, there was an error.', e.message);
  } 
}

const getNews = async (url, token) => {
  try {
    const response = await fetch(url, {
        method: 'GET', 
        body: null,
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      
    return response.json();
  
  } catch(e) {
    console.log('Sorry, there was an error.', e.message);
    throw new Error(e)
  } 
}

const addNews = async (url="/api/", body=null, token) => {
  try {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }
    )
    return response;
    
  } catch(e) {
    console.log('Sorry, there was an error.', e.message);
  } 
}

export { authIn, getNews, addNews };