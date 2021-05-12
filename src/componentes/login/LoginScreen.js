import React from 'react'

const LoginScreen = ({history}) => {

const handleClick = () => {
    history.replace('/')
}


    return (
        <div className="container mt-5">
            LoginScreen 
            
            
            
             <button className="btn btn-primary"
             onClick={handleClick}>
                 Login
            
        </button>
        </div>

      
    )
}

export default LoginScreen
