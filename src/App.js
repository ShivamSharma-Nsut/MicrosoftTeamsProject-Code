import React, {useState} from 'react'

import { Jutsu } from 'react-jutsu'

const App = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const [roomNameErr, setRoomNameErr] = useState({});
  const [nameErr, setNameErr] = useState({});

  const handleClick = event => {
    event.preventDefault()
    const isValid = formValidation();
    if(isValid){
      setCall(true)
    }
  }
  
  const formValidation = () =>{
    const roomNameErr = {};
    const nameErr = {};
    let isValid = true;

    if(room.trim().length === 0){
      roomNameErr.roomNameNotFound = "Room ID is requried";
      isValid = false;
    }

    if(name.trim().length === 0){
      nameErr.nameNotFound = "Name is requried";
      isValid = false;
    }

    setRoomNameErr(roomNameErr);
    setNameErr(nameErr);

    return isValid;
  }

  return (
    <div className='main'>
      <h2 className='heading'>MS Teams</h2>
      
      {call ? (<Jutsu
        height='100%'
        width='100%'
        className='jutsu'
        roomName={room}
        password={password}
        displayName={name}
        onMeetingEnd={() => console.log('Meeting has ended')}
        loadingComponent={<p>Meet is loading ...</p>} />)
        : (
          <form className='form'>
            <input id='room' type='text' placeholder='Room*' value={room} onChange={(e) => setRoom(e.target.value)} required/>
            {Object.keys(roomNameErr).map((key) =>{
              return <div style ={{color: 'red'}}>{roomNameErr[key]}</div>
            })}
            <input id='name' type='text' placeholder='Name*' value={name} onChange={(e) => setName(e.target.value)} />
            {Object.keys(nameErr).map((key) =>{
              return <div style ={{color: 'red'}}>{nameErr[key]}</div>
            })}
            <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick} type='submit'>
              Start / Join
            </button>
          </form>
        )}
    </div>
  )
}

export default App
