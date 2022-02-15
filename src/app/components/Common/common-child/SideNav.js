import '../../../css/SideNav.scss';
import React from 'react';
const SideNav = () => {
  // const [state, setState] = useState({
  //   value: "1",
  //   messageText: ''
  // });
  // let state = {
  //   value: "1",
  //   messageText: ''
  // }
  return (
    <div className="sideWrap_container">
      <div className="sideWrap">
        {/* <OBTTabs
          className="test"
          value={state.value}
          onChange={(e) => setState({...state, value: e.value })}
        >
          <OBTTab value="1" imageUrl={all_menu}>
          </OBTTab>
          <OBTTab value="2" imageUrl={his_menu}>
          </OBTTab>
          <OBTTab value="3" imageUrl={wehago_menu}> 
          </OBTTab>
          <OBTTab value="4" imageUrl={recent_menu}>
          </OBTTab>
        </OBTTabs> */}
        <div className="tab_menu">
          <ul className="tab_list">
            <li className="tab_on">
              <div id="default" className="cont">
                <ul className="v-box">
                  <li className="module-item"><div className="all_menu"></div></li>
                  <li className="module-item"><div className="CLB"></div></li>
                  <li className="module-item"><div className="CLR"></div></li>
                  <li className="module-item"><div className="CLS"></div></li>
                  <li className="module-item"><div className="CLC"></div></li>
                  <li className="module-item"><div className="CLI"></div></li>
                  <li className="module-item"><div className="CLZ"></div></li>
                  <li className="module-item"><div className="CLF"></div></li>
                  <li className="module-item"><div className="CLN"></div></li>
                  <li className="module-item"><div className="CLA"></div></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="sizeTool">
          <div className="sizeToolBtn"></div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
