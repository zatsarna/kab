import React from 'react';
type CountPropsType={
    id: number, value: number }
type RenderType={
    count1: number, count2: number }

const render: RenderType={
    count1: 0,
    count2: 0,
}
export default React.memo(function Count(props: CountPropsType){
    if (props.id===1){
        console.log(`Count1 render: ${++render[`count1`]}`)
    }
    if (props.id===2){
        console.log(`Count2 render: ${++render[`count2`]}`)
    }
    return (<div>{props.value}</div>);
})

//React.memo helps to get rid of unnecessary re-renders. React.memo is a helper-function/high order component
//React.memo use the result of previous render of the component
//Rerender happens only when props values are getting changed