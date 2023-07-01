import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

function generateData() {
    //difficult counting
    console.log('generate data')
    return 123
}

export const Example1 = () => {
    console.log('Example1')

    //const initValue=useMemo(()=>generateData(),[])

    const [counter, setCounter] = useState(generateData);
    //const changer = (state: number) => state + 1
    return <>
        {/*<button onClick={() => setCounter(changer)}>+1</button>*/}
        <button onClick={() => setCounter((state) => state + 1)}>+1</button>
        {counter}

    </>
}