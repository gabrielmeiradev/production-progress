import React from 'react'

export default function StackList({users,background}) {
    // console.log(users)
  return (
    <div className={background?'stack-list-bg':'stack-list'}>

        {users[0]?
            <div id='list-element-1' className='stack-list-element-1'>
                <img src={users[0].image} alt="user1" className='list-image'/>
                <h6 className='list-text'>{users[0].text}</h6>
            </div>:''
        }

        {users[1]?
            <div className='stack-list-element-2'>
                <img src={users[1].image} alt="user2" className='list-image'/>
                <h6 className='list-text'>{users[1].text}</h6>
            </div>:""
        }
        {users[2]?
            <div className='stack-list-element-fade'>
                <img src={users[2].image} alt="user3" className='list-image'/>
                <h6 className='list-text'>{users[2].text}</h6>
            </div>:""
        }

    </div>
  )
}
