import React from "react";
import "../../../css/MenuUtilArea.scss";
import { OBTButton } from "luna-orbit";

const MenuUtilAreaWrap = (props) => {
  const module_name = {
    administration: "진료",
    register: "진료메인",
    user_name: "홍길동",
    user_seq: "00007412",
    user_sex_cd: "M",
    user_age: "46",
    user_inf: "감염정보",
    user_alg: "알러지정보",
    dur: "DUR",
  };

  return (
    <div className="MenuUtilAreaWrap">
      <div className="titleWrap">
        <div className="menuWrap flex">
          <span className="menuIco" />
          <span className="font-15 opac-075 menu-1depth">{module_name.administration}</span>
          <span className="font-15 opac-075 left-arrow" />
          <span className="font-15 menu-lastdepth">{module_name.register}</span>
          <div className="t-fnc flex">
            <div className="t-info flex font-12">
              <span className="ic-user" />
              <span className="bold">{module_name.user_name}</span>
              <span className="opac-075">{module_name.user_seq}</span>
              <span className="opac-075">
                {module_name.user_sex_cd}/{module_name.user_age}
              </span>
            </div>
            <div className="t-search">
              <input type="text" placeholder="환자검색" />
              <OBTButton labelText="상세검색" type={OBTButton.Type.default} />
              <OBTButton labelText="PACS" type={OBTButton.Type.default} />
              <OBTButton labelText="초기화" type={OBTButton.Type.default} />
              <OBTButton labelText="기타버튼" type={OBTButton.Type.default} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuUtilAreaWrap;
