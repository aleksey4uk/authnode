import React, { useEffect, useState } from 'react';


const ShowH1 = () => <h1>hello world</h1>

const TestHook = () => {
    const [ show, setShow ] = useState(false);

    useEffect(() => {
        console.log('Показываем компонент');
        setShow(true)
    }, [])
    
    useEffect(() => {
        const timerId = setTimeout(() => setShow(false), 2000)
    }, [ show ])

    return (
        <div>
            <p>Добро пожаловать в хуки!</p>
            {
                show && <ShowH1 />
            }
        </div>
    )
}

export default TestHook;