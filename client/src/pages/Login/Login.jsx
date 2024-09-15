/*Login.jsx*/
import LoginFormContent from './LoginForm';
import LoginImg from '../../assets/Login.jpeg';
import ImgLogo from '../../assets/Logo_jc.jpeg';

function Login() {
    return (
        <div style={{
            margin: '0',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh', 
            background: 'linear-gradient(24deg, white 50%, #676F8D 50%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflowX: 'hidden'
        }}>
            <div style={{
                position: 'relative',
                right: '-170px',
                textAlign: 'center',
                height: '500px',
                width: '750px',
                backgroundImage: `url(${LoginImg})`,
                backgroundRepeat: 'no-repeat',
                borderRadius: '60px',
                zIndex: '0'
            }}></div>
            <div style={{
                position: 'absolute',
                width: '600px',
                height: '362px',
                left: '48%',
                transform: 'translateX(-50%)', // Center horizontally
                top: '140px',
                fontFamily: 'Arial', // Changed font family to 'Arial'
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '130px',
                lineHeight: '151px',
                letterSpacing: '0.2em',
                color: '#FFFFFF',
                textShadow: '20px 20px 20px rgba(0, 0, 0, 0.25)',
                zIndex: '2',
            }}>
                SIGN UP
            </div>

            <div style={{
                position: 'absolute',
                top: '32px',
                right: '50px',
                paddingRight: '80px',
            }}>
                <img
                    src={ImgLogo}
                    height="100px"
                    alt="xoxo"
                    style={{
                        borderRadius: '50%', 
                    }}
                />
            </div>

            <LoginFormContent />
        </div>
    );
}

export default Login;
