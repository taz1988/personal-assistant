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
        <p class="control has-icons-left has-icons-right">
          <input class="input" name="email" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
          <input class="input" name="password" type="password" placeholder="Password" />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
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