// Home page
import React from "react";
import classes from "./index.module.css";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

// Redirect to index page
function Redirect() {
  // const router = useRouter();
  // router.push("/");
  return <div>Home Page</div>;
}

export default Redirect;
