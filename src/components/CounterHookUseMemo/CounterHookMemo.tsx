import React from 'react';
import Count from './Count';
import IsFive from './IsFive';

const CounterHookUseMemo = () => {
    const [count1, setcount1]=React.useState(0)
    const [count2, setcount2]=React.useState(0)
    return (
        <div>
            <div>
                <button onClick={()=>setcount1(count1+1)}>+</button>
                <Count id={1} value={count1}/>
            </div>
            <div>
                <button onClick={()=>setcount2(count2+1)}>+</button>
                <Count id={2} value={count2}/>
                <IsFive value={count2}/>
            </div>

        </div>
    );
};

export default CounterHookUseMemo;