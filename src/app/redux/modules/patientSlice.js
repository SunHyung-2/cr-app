import { createSlice } from "@reduxjs/toolkit";

// defaultState
const initialState = {
  pid: "", // 환자등록번호
  rcpn_sqno: "", // 접수일련번호
  hstr_sqno: "", // 이력일련번호
  sex: "", // 성별
  age: "", // 나이
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    // 환자 변경
    changePatient: (state, action) => {
      state.pid = action.payload.pid;
      state.rcpn_sqno = action.payload.rcpn_sqno;
      state.hstr_sqno = action.payload.hstr_sqno;
    },
    // 환자 성별, 나이 설정
    setPatientInfo: (state, action) => {
      state.sex = action.payload.sex;
      state.age = action.payload.age;
    },
    // 환자 초기화
    clearPatient: (state) => {
      state.pid = "";
      state.rcpn_sqno = "";
      state.hstr_sqno = "";
      state.sex = "";
      state.age = "";
    },
  },
});

export const { changePatient, setPatientInfo, clearPatient } = patientSlice.actions;

export default patientSlice.reducer;
