import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import StackList from './StackList';
import makeArrow from '../utils/arrows';
import MiniProgressBar from './MiniProgressBar';

export default function BoxBar({ top, left, background, porcent, product2, plant, barID, data }) {
    const [time, setTime] = useState("")

    const convertTimer = (timer) => {
        const [hours, minutes, seconds] = timer.split(':').map(Number);
        const now = new Date();
        const endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds);
        const timeDiff = now - endTime;

        if (timeDiff <= 0) {
            return "00:00:00";
        }

        const diffHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        let timeString = `${diffHours.toString().padStart(2, '0')}:${diffMinutes.toString().padStart(2, '0')}:${diffSeconds.toString().padStart(2, '0')}`;

        return timeString;
    };

        if(data.timer) {
            setInterval(() => {
                setTime(convertTimer(data.timer));
            }, 1000);
        }

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
            {data.timer && <div className="timer">{time}</div>}
           
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
