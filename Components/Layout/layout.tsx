import React, { Fragment } from "react";
import MainHeader from "./main-header";
import MainFooter from "./main-footer";

function Layout(props: any) {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
      <MainFooter></MainFooter>
    </Fragment>
  );
}

export default Layout;
