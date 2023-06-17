import React, {useState} from 'react';
import './App.css';
import {Accordion2} from "./components/Accordion2/Accordion2";
import {Rating, ValueType} from './components/rating/Rating';
import {OnOff} from './components/OnOff/onOff';
import {UnControlledRating} from './components/unControlledRating/unControlledRating';
import {Accordion} from './components/Accordion/Accordion';
import {OnOffControlled} from './components/OnOffControlled/Controlled';
import CounterHookUseMemo from './components/CounterHookUseMemo/CounterHookMemo';

function App() {
    let [ratingValue, setRatingValue]=useState<ValueType>(0)
    let [collapsed, setCollapsed]=useState<boolean>(false)
    let [on, setOn]=useState(false)

  return (
    <div className={'App'}>
        <CounterHookUseMemo/>
        <Accordion2 titleValue={'Menu'} />
       {/* <Accordion titleValue={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}

        <OnOff onChange={setOn}/> {on.toString()}
        {/*<OnOffControlled on={on} setOn={setOn}/>*/}
       <UnControlledRating/>
       {/* <Rating value={ratingValue} setRatingValue={setRatingValue}/>*/}

    </div>
  );
}
type PageTitlePropsType = {
    title: string
}
function PageTitle(props:PageTitlePropsType){

    return <div>{props.title}</div>
}
export default App;

