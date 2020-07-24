
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
    //if(!response.ok) return {logedIn: false };
    return await response.json();
  } catch(e) {
    console.log('Sorry, there was an error.', e.message);
  } 
}

export { authIn };