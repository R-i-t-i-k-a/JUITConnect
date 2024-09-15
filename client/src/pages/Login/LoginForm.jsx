import { useRef, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

import './LoginForm.css';

function LoginFormContent() {
    const enrollmentNumberInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handlePlaceholderClick = (ref) => {
        if (ref.current) {
            ref.current.focus();
        }
    };

    const login = async () => {
        setLoading(true);
        const enrollmentNumber = enrollmentNumberInputRef.current.value;
        const password = passwordInputRef.current.value;

        // Here you can perform any client-side validation before sending the request

        const item = { enrollmentNumber: enrollmentNumber, password: password};
        axios
            .post(`http://localhost:2112/posts/v1.0/login`, item)
            .then(()=>{
                setLoading(false);
                navigate("/dashboard");
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            })
    };

    return (
        <div className="container">
            <div className="label">
                <label htmlFor="enrollmentNumber" onClick={() => handlePlaceholderClick(enrollmentNumberInputRef)}>Enrollment Number</label>
                <br />
                <br />
                <input
                    type="text"
                    id="enrollmentNumber"
                    className="inputField"
                    placeholder="Enrollment Number"
                    ref={enrollmentNumberInputRef}
                />
            </div>
            <div className="label">
                <label htmlFor="password" onClick={() => handlePlaceholderClick(passwordInputRef)}>Password</label>
                <br />
                <br />
                <input
                    type="password"
                    id="password"
                    className="inputField"
                    placeholder="Password"
                    ref={passwordInputRef}
                />
            </div>
            <div className="agreement">
                <input type="checkbox" id="termsOfService" />
                <label htmlFor="termsOfService" className="checkboxLabel">I agree to all statements in terms of service</label>
            </div>
            <button className="button" onClick={login} disabled={loading}>{loading ? 'Signing In...' : 'SIGN UP'}</button>
        </div>
    );
}

export default LoginFormContent;
