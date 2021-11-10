import React from 'react'
import { BsArrowDownRight, BsArrowDownLeft, BsArrowDown, BsArrowLeft, BsArrowRight, BsArrowUpLeft, BsArrowUpRight, BsArrowUp } from 'react-icons/bs';
import { WiCloudyWindy } from 'react-icons/wi'


const Wind = (props) => {
    switch (props.dir) {
        case 'N':
        case 'NNE':
            return (<div className='arrow'><BsArrowDown />{props.speed} km/h</div>);
        case 'NE':
        case 'ENE':
            return (<div className='arrow'><BsArrowDownLeft />{props.speed} km/h</div>);
        case 'NW':
        case 'NNW':
            return (<div className='arrow'><BsArrowDownRight />{props.speed} km/h</div>);
        case 'E':
        case 'ESE':
            return (<div className='arrow'><BsArrowLeft />{props.speed} km/h</div>);
        case 'W':
        case 'WNW':
            return (<div className='arrow'><BsArrowRight />{props.speed} km/h</div>);
        case 'SE':
        case 'SSE':
            return (<div className='arrow'><BsArrowUpLeft />{props.speed} km/h</div>);
        case 'SW':
        case 'WSW':
            return (<div className='arrow'><BsArrowUpRight />{props.speed} km/h</div>);
        case 'S':
        case 'SSW':
            return (<div className='arrow'><BsArrowUp />{props.speed} km/h</div>);
        default:
            return (<div className='arrow'><WiCloudyWindy />{props.speed} km/h</div>)
    }
}

export default Wind
