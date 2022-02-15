import React from 'react';
import '../../css/index.scss';
import Header from './common-child/Header';
import MenuUtilArea from './common-child/MenuUtilArea';
import SideNav from './common-child/SideNav';
import SubcontentsArea from './common-child/SubcontentsArea';

const CommonFrame = () => {
  return (
    <div className="CommonFrame">
      <div className="h-box">
        <SideNav />
        <div className="containerWrap">
          <div className="v-box"><Header /><MenuUtilArea /></div>
        </div>
        <SubcontentsArea />
      </div>
    </div>
  );
};

export default CommonFrame;
