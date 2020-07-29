import {useHistory} from 'react-router-dom';

const useLogOut = () => {
    const history = useHistory();
    return () => {
        localStorage.removeItem('loginStorage');
        history.push('/')
    }
}

export {
    useLogOut
}