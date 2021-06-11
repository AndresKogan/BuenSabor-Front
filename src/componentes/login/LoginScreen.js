import React, { useContext, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { Link } from 'react-router-dom';

const LoginScreen = ({ history }) => {

    const [msgError, setMsgError] = useState('')
    const { dispatch } = useContext(AuthContext)




    const [formValues, handleInputChange] = useForm({
        email: 'andreskm@gmail.com',
        password: '123786'
    });

    const { email, password } = formValues;
    const handleLogin = () => {
        if (isFormValid) {
            dispatch({
                type: types.cocinero,
                payload: {
                    name: 'Andres',
                  
                }
            })

            history.replace('/')
        }
    }

    const isFormValid = () => {

        if (password.trim().length === 0) {
            setMsgError("debe ingresar un password");

            return false;
        }
        else if (!validator.isEmail(email)) {
            setMsgError("el email no es valido");

            return false;
        }

        setMsgError(null);

        return true

    }



    return (
        <div className="container">
            <div className="mb-4 row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h3 className="card-title text-center" >Login</h3>

                            <form className="form-signin" onSubmit={handleLogin}>

                                {
                                    msgError &&
                                    (
                                        <div className="auth__alert-error">
                                            {msgError}
                                        </div>
                                    )
                                }

                                <div className="form-label-group">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        className="form-control"
                                        autoComplete="off"
                                        value={email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-label-group">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={handleInputChange}
                                    />

                                </div>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary  "
                                        onClick={handleLogin}
                                    >
                                        Login
                                   </button>
                                </div>


                                <div className="d-flex justify-content-center">


                                    <div
                                        className="btn"
                                        onClick={handleLogin}
                                    >
                                        <div className="center">
                                            <img className="img-thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                        </div>
                                        <button className=" btn btn-primary">
                                            <b>Sign in with google</b>
                                        </button>
                                    </div>
                                </div>

                                <Link
                                    to="/auth/register"
                                    className="link"
                                >
                                    Create new account
        </Link>


                            </form>
                        </div>
                    </div >
                </div>
            </div >
        </div >
    )
}

export default LoginScreen
