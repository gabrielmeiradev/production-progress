import React from 'react'
import ProgressBar from './ProgressBar';
import StackList from './StackList';
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import makeArrow from '../utils/arrows';

export default function BoxBar({top,left,background,porcent,tank,product,product2,plant,barID}) {
    const users = [
                {
            position:1,
            text:'Cliente 1',
            image:user1
        },
        {
            position:2,
            text:'Cliente 2',
            image:user2
        },
        {
            position:3,
            text:'Cliente 3',
            image:user3
        }
    ]     

    const id = setInterval(() => {
    const c = makeArrow(barID)
    if (c){
        console.log(c)
        clearInterval(id)
    }
    }, 1000);

  return (
    <div className='box-bar' style={{top:`${top}%`,left:`${left}%`}}>
        <ProgressBar porcent={porcent} plant={plant}/>
        <StackList users={users} background={background}/>

        <img className='tank' src={require(`../assets/${tank}_galao.gif`)} alt='tank'/>
        {product?
        <img className='product' src={require(`../assets/${product}.png`)} alt='product'/>:''}
        {product2?
        <div className='product2-div'>
            <img className='product2' src={require(`../assets/${product2}.png`)} alt='product'/>
        </div>:''}
        <canvas className={`arrow-${barID}`} id={`arrow${barID}`}></canvas>
    </div>

  )
}
