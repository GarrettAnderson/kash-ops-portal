import React, { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/styles/Login.css";

function UpdatePassword() {
  const navigate = useNavigate();
  let usernameInput = useRef();
  let passwordInput = useRef();
  let confrimPasswordInput = useRef();
  let updatePWForm = useRef();

  useEffect(() => {
    // useEffect to remove the padding around the kash ops image since the padding is applied to the body  on the styles.css file and affects all other pages.
    document.body.classList.add("remove-body-padding");

    return () => {
      document.body.classList.remove("remove-body-padding");
    };
  }, []);

  const updatePassword = () => {
    console.log("Update Password Triggered");
    updatePWForm.current.reset();
  };
  return (
    <main className="kash-operations-login">
      <div className="kash_operations_home--hero-section">
        <h1 className="kash_operations_home--title">Operations Center</h1>
        <p className="home-hero--toast_message">By KASH Tech</p>
      </div>
      <div className="kash_operations_home--content-holder update-password--content-holder">
        <div className="kash_operations_home--banner-heading">
          <Link
            to="/"
            className="return-to-operations-hub update-password--return-to-login"
          >
            <svg
              width="80"
              height="134"
              viewBox="0 0 80 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M76.7864 3.36106C72.8812 -0.544183 66.5495 -0.544181 62.6443 3.36106L1.12622 64.8787C-0.0453612 66.0503 -0.0453675 67.9497 1.12621 69.1213L62.6445 130.64C66.5497 134.545 72.8814 134.545 76.7866 130.64C80.6919 126.734 80.6919 120.403 76.7866 116.497L29.4107 69.1216C28.2391 67.95 28.2391 66.0505 29.4107 64.8789L76.7864 17.5032C80.6917 13.598 80.6917 7.2663 76.7864 3.36106Z"
                fill="#ffb494"
              />
            </svg>
            <p>Return to Login</p>
          </Link>
        </div>
        <form method="post" className="login-form" ref={updatePWForm}>
          <h1 className="kash_operations_home--title login-heading">
            Update Password
          </h1>

          <div className="login-field">
            <label className="login-form--input_label" htmlFor="password-input">
              <p className="login-form--username-label">Username</p>
              <input
                type="text"
                className="login-input"
                id="username-input"
                name="username-input"
                required
                ref={usernameInput}
              />
            </label>
          </div>
          <div className="login-field">
            <label className="login-form--input_label" htmlFor="password-input">
              <p className="login-form--username-label">Password</p>
              <input
                type="text"
                className="login-input"
                id="password-input"
                name="password-input"
                required
                ref={passwordInput}
              />
            </label>
          </div>
          <div className="login-field">
            <label
              className="login-form--input_label"
              htmlFor="confrim-password-input"
            >
              <p className="login-form--password-label">Confirm Password</p>
              <input
                type="password"
                className="login-input"
                id="confirm-password-input"
                name="confirm-password-input"
                required
                ref={confrimPasswordInput}
              />
            </label>
          </div>
          <button
            type="submit"
            value="Submit"
            className="button signin-button"
            onClick={updatePassword}
          >
            <div className="signin-text">Update Password</div>
          </button>
        </form>
      </div>
    </main>
  );
}
export default UpdatePassword;
