import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import StackList from './StackList';
import makeArrow from '../utils/arrows';
import MiniProgressBar from './MiniProgressBar';

export default function BoxBar({ top, left, background, porcent, product2, plant, barID, data }) {

    data.timer = "2024-01-21T18:19:29.889Z"
    const [time, setTime] = useState("")

    const convertTimer = (timer) => {
        const now = new Date();
        const endTime = new Date(timer);
        const timeDiff = now - endTime;

        if (timeDiff <= 0) {
            return time;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        let timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (days > 365) {
            const years = Math.floor(days / 365);
            const months = Math.floor(days / 30);
            timeString = `${years}A ${months}M ${timeString}`;
        } else if (days > 30) {
            const months = Math.floor(days / 30);
            timeString = `${months}M ${days}D ${timeString}`;
        } else {
            timeString = `${days}D ${timeString}`;
        }

        return timeString;};

    setInterval(() => {
        setTime(convertTimer(data.timer));
    }, 1000);
    const id = setInterval(() => {
        const c = makeArrow(barID)
        if (c) {
            clearInterval(id)
        }
    }, 1000);

  

    return (
        <div className='box-bar' style={{ top: `${top}%`, left: `${left}%` }}>
            <ProgressBar porcent={data.total_porcentage} plant={plant} />

            <StackList users={data.users} background={background} />
            
            <canvas className={`arrow-${barID}`} id={`arrow${barID}`}></canvas>
            <canvas className={`arrow-${barID}`} id={`arrow-line${barID}`}></canvas>
            <div className='mini-circle-1'>
                
                <h1 className='mini-circle-porcent'>{data.turn_3}</h1>
            </div>
            <div className='mini-circle-2'>
                <h1 className='mini-circle-porcent'>{data.turn_2}</h1>
            </div>
            <div className='mini-circle-3'>
                <h1 className='mini-circle-porcent'>{data.turn_1}</h1>
            </div>
            <div className="timer">{time}</div>
            <div className='mini-progress-bar'>
                <MiniProgressBar />
               
                <div className="porcentage-div-mini-bar">
                    <h1 className="porcentage-mini-bar">{data.product.porcentage}%</h1>
                </div>
                <div className='product-name-area'>
                    <>
                        <div className='product2-div'>
                            <img className='product2' src={data.product.image ? data.product.image : require(`../assets/${product2}.png`)} alt='product' />
                        </div>
                    </>

                </div>
            </div>
        </div>

    )
}
