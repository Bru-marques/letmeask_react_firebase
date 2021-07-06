import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss'

export function NewRoom(){
    const {user } = useAuth();
    
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
                    <h2>Create a new room</h2>
                    <form>
                        <input
                        type='text'
                        placeholder="Room's name"
                        />
                        <Button type='submit'>Create room</Button>
                    </form>
                    <p>Do you want to join a existing room? 
                    <Link to='/'>Click here</Link>    
                    </p>
                </div>
            </main>
        </div>
    )
}
