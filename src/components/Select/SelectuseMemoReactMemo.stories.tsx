import type { Meta, StoryObj } from '@storybook/react';
import React, {ChangeEvent, useMemo, useState} from 'react';
import {ItemType, Select} from './Select';

const meta: Meta<typeof Select> = {
    title: 'useMemo for Select',
    tags: ['autodocs'],
    component: Select,
};
export default meta;
type Story = StoryObj<typeof Select>;

let items: ItemType[]=[
    {title: "New York", value: "1", country: "USA", populationMln: 8.6},
    {title: "Los Angeles", value: "2", country: "USA", populationMln: 4.1},
    {title: "Chicago", value: "3", country: "USA", populationMln: 2.7},
    {title: "Dallas", value: "4", country: "USA", populationMln: 1.4},
    {title: "Warsaw", value: "5", country: "Poland", populationMln: 1.7},
    {title: "Lodz", value: "6", country: "Poland", populationMln: .8},
    {title: "Wroclaw", value: "7", country: "Poland", populationMln: .6},
    {title: "Krakow", value: "8", country: "Poland", populationMln: .8},
    {title: "Kyiv", value: "9", country: "Ukraine", populationMln: 2.9},
    {title: "Kharkiv", value: "10", country: "Ukraine", populationMln: 1.4},
    {title: "Odesa", value: "11", country: "Ukraine", populationMln: 1},
    {title: "Dnipro", value: "12", country: "Ukraine", populationMln: .9},
]

export const SelectCitiesWithA = ()=>{
    const [value, setValue]=useState<string >("")
    const citiesWithA=useMemo(()=>{
        return items.filter(el => el.title.toLowerCase().indexOf("a")>-1)
    }, [items])
    const [counter, setCounter] = useState(0);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            {counter}
            <Select value={value}  items={citiesWithA} onChange={setValue}/>
        </>
    )
}
export const SelectCitiesBelongToOneCountry = ()=>{

    const [value, setValue]=useState<string >("")
    const [counter, setCounter] = useState(0);

    const UkrainianCities=useMemo(()=>{
        return items.filter(el => el.country==="Ukraine")
    },[items])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            {counter}
            <Select value={value} items={UkrainianCities} onChange={setValue}/>
        </>
    )
}
export const SelectPopulationGreaterThan2mln = ()=>{

    const [value, setValue]=useState<string >("")
    const [counter, setCounter] = useState(0);
    const populationMoreThan2Mln=useMemo(()=>{
        return items.filter(el => el.populationMln>2)
    }, [items])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            {counter}
            <Select value={value} items={populationMoreThan2Mln} onChange={setValue}/>
        </>
    )
}