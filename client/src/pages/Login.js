import spotifyIcon from '../img/spotifyIcon.png';

const LOGIN_URI = 
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://licensify.herokuapp.com/login';


const Login = () => {
  return (
    <div id="loginPage">
      <p id="tagline">Let us tell you which chinese philosopher you resemble based on what you listen to!</p>
      <p id="mainFont">Click the button below to generate your philosopher's license, which tells you your top genres and philosopher.</p>
      <a id="loginButton" href={LOGIN_URI}>
        <img src={spotifyIcon} alt="Spotify logo"></img>
        <p>Connect with Spotify</p>
      </a>
    </div>
  )
}

export default Login;