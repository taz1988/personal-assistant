import React from 'react';
import ReactDOM from "react-dom";
import '../css/login.scss';
import '../css/bulma.sass';

function Login() {
  return (
  <form method="post">
    <div className="container login-container">
        <h1>Personal Assistant</h1>
        <div class="field">
        <p class="control">
          <input class="input" name="email" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
          <input class="input" name="password" type="password" placeholder="Password" />
        </p>
        </div>
        <div class="field">
        <p class="control">
          <button class="button is-success">
            Login
          </button>
        </p>
    </div>
    </div>
    </form>
  );
}

export default Login;
