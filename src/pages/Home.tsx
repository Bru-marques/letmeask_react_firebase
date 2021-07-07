import {useHistory} from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'

import '../styles/auth.scss'

export function Home(){
    const history = useHistory();
    const {signInWithGoogle, user} = useAuth()
    const [ roomCode, setRoomCode] = useState('')

    async function handleCreateRoom() {
        if(!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new')
    }

    async function handleJoinRoom( event: FormEvent) {
        event.preventDefault();

        if(roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();
        if(!roomRef.exists()){
            alert('Room does not exists.');
            return;
        }

        history.push(`/rooms/${roomCode}`)
    }

    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt='Login Illustration' />
                <strong>Create live Q&amp;A rooms</strong>
                <p>Answer the questions of your audience in real time</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt='Letmeask' />
                    <button 
                    onClick={handleCreateRoom}
                    className='create-room'>
                        <img src={googleIconImg} alt='Google icon' />
                        Create a room with your Google email
                    </button>
                    <div className="separator">or join an existing room</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                        type='text'
                        placeholder='Enter the room code'
                        onChange={event => setRoomCode(event.target.value)}
                        value={roomCode}
                        />
                        <Button type='submit'>Join the room</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
