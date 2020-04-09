import React from "react";
import Theme from "./Theme";
import Header from "./Header";
import Hero from "./Hero";
import Editor from "./Editor";
import history from "./utils/history";
import { Auth0Provider } from "./Auth";
import { ParallaxProvider } from "react-scroll-parallax";
import useIpfs, { createIpfs } from "./utils/ipfs";

(async () => {
  const node = await createIpfs("/opt/lot-sh/repo");
  console.log(node);
  // const file = await node.get("QmSEMvMuBcWcMH1A4ky7Dm7Fzjv1e67E5LLQ3U2o4ERPip");
  // console.log(file.toString("utf8"));
})();

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const App = () => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      client_id={process.env.REACT_APP_CLIENT_ID}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <ParallaxProvider>
        <Theme>
          <Header>
            <Hero></Hero>
          </Header>
          <div
            style={{
              height: "500px",
              width: "1000px",
              margin: "auto",
            }}
          >
            <Editor />
          </div>
        </Theme>
      </ParallaxProvider>
    </Auth0Provider>
  );
};

export default App;
