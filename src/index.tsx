import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TweetProvider } from "./context/tweetContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Suspense
        fallback={
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#8ec8ef", "#8ec8ef", "#8ec8ef", "#8ec8ef", "#8ec8ef"]}
          />
        }
      >
        <TweetProvider>
          <App />
        </TweetProvider>
      </Suspense>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
