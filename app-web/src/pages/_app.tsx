import React from "react";
import { Provider } from "react-redux";
import NavBar from "../components/navbar";
import { factory } from "../features/store";
// @ts-ignore
import style from "./_app.less";

const store = factory();

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={style.container}>
        <NavBar />

        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  );
}
