// Login page
import React from "react";
import classes from "./index.module.css";
import Link from "next/link";

function Login() {
  const text = {
    DE: {
      email: "Email",
      password: "Passwort",
      connect: "Verbinden",
      forgot: "Ich habe mein Passwort vergessen",
    },
    EN: {
      email: "email",
      password: "password",
      connect: "Connect",
      forgot: "I forgot my password",
    },
  };
  return (
    <div className={classes.container}>
      <form action="" className={classes.form}>
        <input
          type="email"
          placeholder={text.EN.email}
          className={classes.input}
        />
        <input
          type="password"
          placeholder={text.EN.password}
          className={classes.input}
        />
        <input
          type="sumbit"
          value={text.EN.connect}
          className={classes.connect}
        />
      </form>
      <Link href="/client/forgot-password" className={classes.link}>
        {text.EN.forgot}
      </Link>
    </div>
  );
}

export default Login;
