import React from 'react'
import ProgressBar from './ProgressBar';
import StackList from './StackList';
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'


export default function BoxBar({top,left,background,porcent}) {
    // const [porcent, setPorcent] = useState(0); 
    // const [user, setUser] = useState(''); 
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
    // const [randomImg, setRandomImg] = useState(0)     
    
    // const handlerIncrent =()=>{
    //     if (porcent<100){
    //         setPorcent(porcent+2)
    //     }

    // }
    // const handlerDecrement =()=>{
    //     if (porcent>0){
    //         setPorcent(porcent-2)
    //     }

    // }
    // const handleChange = (value)=>{
    //     setUser(value)
    // }
    // const sendUser = ()=>{
    //     let img = ''
    //     if (users.length===3){
    //         users.pop()
    //     }
    //     console.log(randomImg)
    //     switch (randomImg) {
    //         case 1:
    //             img =user1
    //             setRandomImg(2)
    //             break;
    //         case 2:
    //             img =user2
    //             setRandomImg(3)
    //             break;
    //         case 3:
    //             img =user3
    //             setRandomImg(4)
    //             break;              
    //         default:
    //             img =user4          
    //             setRandomImg(1)
    //     }
    //     const newArr = [...users]
    //     newArr.unshift({
    //       text: user,
    //       image: img
    //     });
    //     setUsers(newArr)
    //     console.log(users)
    //     var listElement1 = document.getElementById('list-element-1');

    //     listElement1.classList.remove("stack-list-element-1")
    //     void listElement1.offsetWidth;
    //     listElement1.classList.add("stack-list-element-1")
    // }
  return (
    <div className='box-bar' style={{top:`${top}px`,left:`${left}px`}}>
        <ProgressBar porcent={porcent} />
        <StackList users={users} background={background}/>
        {/* <div className='arrow-1'></div> */}
        {/* <div class="arrow">
            <div class="curve"></div>
            <div class="point"></div>
        </div> */}
    </div>

  )
}
