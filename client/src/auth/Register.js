import {useEffect, useState} from 'react'
import axios from '../api/axios'
import useAuth from '../hook/useAuth'
import { useNavigate, Link } from 'react-router-dom'

export default function Register(){
    
    const [registerData, setRegisterData] = useState({
        username: '', password: ''
    })
    const [errMsg, setErrMsg] = useState('')
    const {auth, setAuth} = useAuth()
    const navigate = useNavigate()

    //clear error
    useEffect(()=>{
        setErrMsg('')
    },[registerData])

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const {data} = await axios.post('/auth/register', registerData)
            setAuth(data)
            navigate('/', {replace: true})
        }catch(err){
            console.log(err)
            setErrMsg(err.response.data.msg)
        }
    }

    const handleChange = (e)=>{
        setRegisterData(prev=> ({...prev, [e.target.name]: e.target.value}))
    }
    console.log(auth)
    return(
        <div className='auth-container'>
            <div className='logo-container'>
                <div className='chit-chat'>ChitChat</div>
                <div>
                    <img src={require('../icons/chat.gif')} alt='logo' className='logo'/>
                </div>
            </div>
            <h2 className='auth-heading'>Register</h2>
            <div>
                <p className={errMsg? 'error-container': 'offscrean'}>
                    {errMsg}
                </p>
                <form onSubmit={handleSubmit} className='auth-form'> 
                    <input type='text' value={registerData.username} name='username'
                        onChange={handleChange}
                        placeholder='username'/>
                    <input type='password' value={registerData.password} name='password'
                        onChange={handleChange}
                        placeholder='password'/>
                    <button>Register</button>
                </form>
                <div className='redirect-button'>
                    <Link to='/login'>Already have an account?</Link>
                </div>
            </div>
        </div>
    )
}