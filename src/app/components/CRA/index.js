import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="CRA1000">진료메인</Link>
        </li>
        <li>
          <Link to="CRA2000">상용구</Link>
        </li>
        <li>
          <Link to="CRA3000">약속처방</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
