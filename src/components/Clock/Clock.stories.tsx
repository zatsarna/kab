import {Clock} from './Clock';

export default {
    title: 'Clock',
    component: Clock
}
export const DigitalClockExample = () => <Clock mode={'digital'}/>
export const AnalogClockExample=()=><Clock mode={'analog'}/>