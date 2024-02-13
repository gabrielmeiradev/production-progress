import React from 'react'
import ProgressBar from './ProgressBar';
import StackList from './StackList';
import makeArrow from '../utils/arrows';
import MiniProgressBar from './MiniProgressBar';

export default function BoxBar({ top, left, background, porcent, product2, plant, barID, data }) {


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
