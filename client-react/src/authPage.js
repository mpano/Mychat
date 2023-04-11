import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    // <div className="login-page">
    //   <div className="card">
    //     {/* Login Form */}
    //     <form onSubmit={onLogin}>
    //       <div className="title">Login</div>

    //       <button type="submit">LOG IN</button>
    //     </form>
    //
    //     {/* Sign Up Form */}
    //     <form onSubmit={onSignup}>
    //       <div className="title">or Sign Up</div>
    //       <input
    //         type="text"
    //         name="username"
    //         placeholder="Username"
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //       <input
    //         type="password"
    //         name="secret"
    //         placeholder="Password"
    //         onChange={(e) => setSecret(e.target.value)}
    //       />
    //       <input
    //         type="text"
    //         name="email"
    //         placeholder="Email"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />

    //       <button type="submit">SIGN UP</button>
    //     </form>
    //   </div>
    //
    //  <style>{`
    //   .login-page { width: 100vw; height: 100vh; padding-top: 6vw; background: linear-gradient(180deg, rgba(117,84,160,1) 7%, rgba(117,84,160,1) 17%, rgba(106,95,168,1) 29%, rgba(99,103,174,1) 44%, rgba(87,116,184,1) 66%, rgba(70,135,198,1) 83%, rgba(44,163,219,1) 96%, rgba(22,188,237,1) 100%, rgba(0,212,255,1) 100%); }
    //   .card { width: 200px; position: relative; left: calc(50vw - 100px); text-align: center; }
    //   .title { padding-top: 32px; font-size: 22px; color: white; font-weight: 700; }
    //   input { width: calc(100% - 16px); margin-top: 12px; padding: 8px; background-color: #e6f7ff; outline: none; border: 1px solid #e6f7ff; }
    //   button { margin-top: 12px; width: 100%; padding: 8px; }
    //   `}</style>
    // </div>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form onSubmit={onSignup}>
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input type="text" name="username" placeholder="User name" required="" onChange={(e) => setUsername(e.target.value)} />
                <input type="email" name="email" placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" name="secret" placeholder="Password" required="" onChange={(e) => setSecret(e.target.value)} />
               <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
              />
                    <button>Sign up</button>
            </form>
          </div>

          <div className="login">
            <form onSubmit={onLogin}>
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
              />
              <input
                  type="password"
                  name="secret"
                  placeholder="Password"
                  onChange={(e) => setSecret(e.target.value)}
              />
                  <button>Login</button>
            </form>
          </div>
          <style>{`
              body{
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              font-family: 'Jost', sans-serif;
              background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
          }
              .main{
              width: 450px;
              height: 600px;
              background: red;
              overflow: hidden;
              background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
              border-radius: 10px;
              box-shadow: 5px 20px 50px #000;
          }
              #chk{
              display: none;
          }
              .signup{
              position: relative;
              width:100%;
              height: 100%;
          }
              label{
              color: #fff;
              font-size: 2.3em;
              justify-content: center;
              display: flex;
              margin: 60px;
              font-weight: bold;
              cursor: pointer;
              transition: .5s ease-in-out;
          }
              input{
              width: 60%;
              height: 20px;
              background: #e0dede;
              justify-content: center;
              display: flex;
              margin: 20px auto;
              padding: 10px;
              border: none;
              outline: none;
              border-radius: 5px;
          }
              button{
              width: 60%;
              height: 40px;
              margin: 10px auto;
              justify-content: center;
              display: block;
              color: #fff;
              background: #573b8a;
              font-size: 1em;
              font-weight: bold;
              margin-top: 20px;
              outline: none;
              border: none;
              border-radius: 5px;
              transition: .2s ease-in;
              cursor: pointer;
          }
              button:hover{
              background: #6d44b8;
          }
              .login{
              height: 460px;
              background: #eee;
              border-radius: 60% / 10%;
              transform: translateY(-180px);
              transition: .8s ease-in-out;
          }
              .login label{
              color: #573b8a;
              transform: scale(.6);
          }

              #chk:checked ~ .login{
              transform: translateY(-500px);
          }
              #chk:checked ~ .login label{
              transform: scale(1);
          }
              #chk:checked ~ .signup label{
              transform: scale(.6);
          }
          `}</style>
      </div>
  );
};

export default AuthPage;
