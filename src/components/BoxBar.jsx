import React from 'react'
import ProgressBar from './ProgressBar';
import StackList from './StackList';
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import makeArrow from '../utils/arrows';
import MiniProgressBar from './MiniProgressBar';

export default function BoxBar({ top, left, background, porcent, tank, product, product2, plant, barID }) {
    const users = [
        {
            position: 1,
            text: 'Cliente 1',
            image: user1
        },
        {
            position: 2,
            text: 'Cliente 2',
            image: user2
        },
        {
            position: 3,
            text: 'Cliente 3',
            image: user3
        }
    ]

    const id = setInterval(() => {
        const c = makeArrow(barID)
        if (c) {
            console.log(c)
            clearInterval(id)
        }
    }, 1000);

    return (
        <div className='box-bar' style={{ top: `${top}%`, left: `${left}%` }}>
            <ProgressBar porcent={porcent} plant={plant} />
            <StackList users={users} background={background} />

            {/* <img className='tank' src={require(`../assets/${tank}_galao.gif`)} alt='tank'/> */}
            <canvas className={`arrow-${barID}`} id={`arrow${barID}`}></canvas>
            <canvas className={`arrow-${barID}`} id={`arrow-line${barID}`}></canvas>
            <div className='mini-circle-1'>
                <h1 className='mini-circle-porcent'>12</h1>
            </div>
            <div className='mini-circle-2'>
                <h1 className='mini-circle-porcent'>20</h1>
            </div>
            <div className='mini-circle-3'>
                <h1 className='mini-circle-porcent'>75</h1>
            </div>
            <div className='mini-progress-bar'>
                <MiniProgressBar />
                <div className="porcentage-div-mini-bar">
                    <h1 className="porcentage-mini-bar">10%</h1>
                </div>

                <div className='product-name-area'>
                    {product2 ?
                        <>
                            <div className='product2-div'>
                                <img className='product2' src={require(`../assets/${product2}.png`)} alt='product' />
                            </div>
                            {/* <div className='product-unit'></div> */}

                        </>
                        : ''}
                </div>
            </div>
        </div>

    )
}
