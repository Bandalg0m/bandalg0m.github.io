import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import auth from './Auth.module.scss'

const Auth = () => {
    return (

        <div className={auth.wrapper}>
            <div className={auth.container}>
                <Header />
                <div className={auth.form}>
                    <div className={auth.form__inputs}>
                        <input type="text" className={auth['form__inputs--input']} placeholder="Login" />
                        <input type="password" className={auth['form__inputs--input']} placeholder="Password" />
                    </div>

                    <div className={auth.form__desc}>
                        <a href="" className={auth.desc__instruction}>How to create account?</a>
                        <button type="submit" className={auth.desc__btn}>Log In</button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>


    )
}

export default Auth;