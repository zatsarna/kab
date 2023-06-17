import React from 'react';
type isFivePropsType={ value: number }
let renderCount=0;

export default React.memo(function IsFive(props: isFivePropsType) {
    console.log(`isFive render: ${++renderCount}`)

    const getResult =React.useMemo(()=> {
        let i=0;
        while (i<60000) i++;
        return props.value===5 ? 'It is 5' : "It's not 5"
    },[props.value])

    return (
        <div>{getResult}</div>
    );

}, (prevProps, nextProps)=>{
    if (nextProps.value===5){
        return false; //do rerender
    }else {
        return true; //no rerender
    }
})
//with hook useMemo you can pick which function to memoize and according to which condition
//memoization=result of function execution is saved into const. We execute function again only when dependencies are getting changed. If dependencies are the same we use value from the const