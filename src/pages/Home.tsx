import {useHistory} from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss'

export function Home(){
    const history = useHistory();
    const {signInWithGoogle, user} = useAuth()

    async function handleCreateRoom() {
        if(!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new')
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
                    <form>
                        <input
                        type='text'
                        placeholder='Enter the room code'
                        />
                        <Button type='submit'>Join the room</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
