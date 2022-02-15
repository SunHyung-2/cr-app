import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/Header.scss';

const Header = () => {
  let module_name = {
    "administration": "원무",
    "medi_support" : "진료지원",
    "register": "접수/수납",
    "subcontents" : "서브컨텐츠영역",
    "user_name" : "홍길동",
    "company_name" : "더조은병원",
    "team_name" : "원무 2팀",
  }
  return (
    <div className="headerWrap">
      <div className="nav">
        <div className="main_ci"><Link to="/"><img src="imgs/img_wegagoh_logo.png" alt="wehago-h_logo" /></Link></div>
        <div className="h-box">
          <ul className="tabs">
            <li className="tab-item on">
              <div className="contextmenu-wrapper">
                <span className="new_window" title="새창열기"></span>
                <span className="contextmenu-wrapper module_name">접수/수납</span>
                <span className="tab_close" title="탭닫기"></span>
              </div>
            </li>
            <li className="tab-item">
              <div className="contextmenu-wrapper">
                <span className="new_window" title="새창열기"></span>
                <span className="contextmenu-wrapper module_name">진료통계</span>
                <span className="tab_close" title="탭닫기"></span>
              </div>
            </li>
            <li className="tab-item">
              <div className="contextmenu-wrapper">
                <span className="new_window" title="새창열기"></span>
                <span className="contextmenu-wrapper module_name">처방코드관리</span>
                <span className="tab_close" title="탭닫기"></span>
              </div>
            </li>
            <li className="tab-item">
              <div className="contextmenu-wrapper">
                <span className="new_window" title="새창열기"></span>
                <span className="contextmenu-wrapper module_name">처방코드관리</span>
                <span className="tab_close" title="탭닫기"></span>
              </div>
            </li>
            <li className="tab-item">
              <div className="contextmenu-wrapper">
                <span className="new_window" title="새창열기"></span>
                <span className="contextmenu-wrapper module_name">처방코드관리</span>
                <span className="tab_close" title="탭닫기"></span>
              </div>
            </li>
            <li className="tab-item">
              <div className="contextmenu-wrapper">
                <span className="new_window" title="새창열기"></span>
                <span className="contextmenu-wrapper module_name">처방코드관리</span>
                <span className="tab_close" title="탭닫기"></span>
              </div>
            </li>
            <li className="tab-item">
              <div className="contextmenu-wrapper">
                <span className="new_window" title="새창열기"></span>
                <span className="contextmenu-wrapper module_name">처방코드관리관리</span>
                <span className="tab_close" title="탭닫기"></span>
              </div>
            </li>
            <li className="tab-item center">...</li>
          </ul>
        </div>
        <div className="headfnc">
          <div className="header-misc">
            <ul className="h-box">
              <li><span className="bookmark" /></li>
              <li><span className="alert" /></li>
              <li><span className="calendar" /></li>
              <li><span className="memo" /></li>
              <li><span className="question" /></li>
              <li>
                <div className="user_container h-box">
                  <span className="user_profile" />
                  <div className="userInfo v-box">
                    <span>{module_name.user_name}</span>
                    <span>{`${module_name.company_name} ${module_name.team_name}`} &#9660;</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
