import {useHistory} from 'react-router-dom';

const useLogOut = () => {
    const history = useHistory();
    return () => {
        localStorage.removeItem('loginStorage');
        history.push('/')
    }
}

const getToken = () => {
    try {
        const lsToken = JSON.parse(localStorage.getItem('loginStorage'));
        if(!lsToken) throw new Error("нет токена авторизации");

        const {token} = lsToken
        return JSON.stringify(token);
    } catch (e) {
        return {
            error: true,
            message: e.message
        }
    }    
}

export {
    useLogOut,
    getToken
}