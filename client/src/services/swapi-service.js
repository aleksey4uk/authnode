import { getToken } from '../utils/utils';

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

const deleteNews = async (id) => {
  try {
    const token = getToken();
    const result = await fetch('/api/home/delete', {
        body: JSON.stringify({id}),
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })

    return result.json();
  } catch(e) {
      return console.log("Произошла ошибка при удалении", e)
  }
}

//Получение данных о учетной записи.
const getAccountDetails = async (url, token) => {
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

//Изменение данных учетной записи.
const editAccountDetails = async (url, body, token) => {
  try {
    const token = getToken();
    const result = await fetch(url, {
        body: JSON.stringify(body),
        method: 'PUT',
        headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })

    return result.json();

  } catch(e) {
      return console.log("Произошла ошибка при удалении", e)
  }
}

export { 
  authIn,
  getNews, 
  addNews, 
  deleteNews,
  getAccountDetails,
  editAccountDetails
};