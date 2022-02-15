import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideNav from "./app/components/Common/common-child/SideNav";
import Header from "./app/components/Common/common-child/Header";
import MenuUtilArea from "./app/components/Common/common-child/MenuUtilArea";
import Main from "./app/components/CRA";
import CRA1000 from "./app/components/CRA/CRA1000";
import CRA2000 from "./app/components/CRA/CRA2000";
import CRA3000 from "./app/components/CRA/CRA3000";

function App() {
  return (
    <BrowserRouter>
      <div className="CommonFrame">
        <div className="h-box">
          <SideNav />
          <div className="containerWrap">
            <div className="v-box">
              <Header />
              <MenuUtilArea />
            </div>
            <div>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/CRA1000" component={CRA1000} />
                <Route path="/CRA2000" component={CRA2000} />
                <Route path="/CRA3000" component={CRA3000} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
