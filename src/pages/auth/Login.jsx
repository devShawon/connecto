import React from 'react'

import Headings from '../../components/utilities/Headings'
import Input from '../../components/utilities/Input'
import Button from '../../components/utilities/Button'
import { AiFillGoogleSquare } from "react-icons/ai";
import Paragraph from '../../components/utilities/Paragraph';
import Linking from '../../components/utilities/Linking';

const Login = () => {
  return (
    <section>
        <div className='wrap'>
            <div className='flex items-center flex-col'>
                    <div className='loginbox'>
                        <Headings 
                            Heading={'h1'}
                            className= 'text-5xl font-arizonia font-semibold capitalize text-center mt-5 mb-12'
                            text= 'chatlify'
                        />
                        <div className='w-full'>
                            <form action="">
                                <div className=''>
                                    <Input className= 'loginInputbox' type= 'email' placeholder= 'enter your email' />
                                </div>
                                <div className=''>
                                    <Input className= 'loginInputbox mt-3' type= 'password' placeholder= 'password' />
                                </div>
                                <Button className='w-full bg-mantine-blue text-white font-poppins py-2 text-lg mt-5 rounded-lg font-semibold' text= 'Log in' />
                            </form> 
                            <Headings 
                                Heading={'h4'}
                                className= 'or text-dark-blue'
                                text= 'or'
                            />
                        </div>
                        <div className='flex gap-x-2 justify-center items-center mt-6 cursor-pointer group'>
                            <AiFillGoogleSquare className='text-tory-blue text-2xl group-hover:text-dark-blue'/>
                            <Headings 
                                Heading={'h3'}
                                className= 'text-tory-blue font-poppins font-medium group-hover:text-dark-blue'
                                text= 'Login with Google'
                            />
                        </div>
                        <Headings 
                            Heading={'h3'}
                            className= 'mt-6 font-poppins text-xs text-dark-blue font-normal cursor-pointer hover:underline'
                            text= 'Forgot Password?'
                        />
                    </div>
                    <div className='loginbox mt-3'>
                        <Paragraph className= 'text-sm font-poppins text-dark-blue'>
                            Don't have an Account? <Linking className= 'text-mantine-blue text-sm font-poppins font-semibold' text= 'Sign Up' />
                        </Paragraph>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Login