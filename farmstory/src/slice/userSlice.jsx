import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const loadStateFromCookie= ()=>{
    const auth = Cookies.get('auth');

    if (auth) {
        try {
            const parsedAuth = JSON.parse(auth); // JSON 문자열을 객체로 변환
            const { username, role, accessToken } = parsedAuth;
            return { username, role, accessToken };
        } catch (e) {
            console.error("Error parsing auth cookie:", e);
            return null; // 파싱 실패 시 초기 상태 반환
        }
    }
    return null; // 쿠키가 없으면 null 반환
}

const initState={
    username:"",
    role:"",
    accessToken:"",
    refreshToken:"",
}

const userSlice = createSlice({
    name: "userSlice",
    initialState: loadStateFromCookie() || initState,
    reducers: {
        login: (state,action) => {
            const data = action.payload;
            console.log('userSlice login data : ',data);

            //리덕스 상태 초기화
            state.username = data.username;
            state.role =data.role;
            state.accessToken = data.accessToken;

              // 쿠키에 데이터 저장
              Cookies.set('auth', JSON.stringify(data), { expires: 7 }); // 7일 동안 유지
         


        },
        logout: (state) => {
            console.log("로그아웃 ,,,,");

            //초기값으로 되돌리기
            state.username = null;
            state.role = null;
            state.accessToken = null;

            // 쿠키 삭제
            Cookies.remove('auth');
        },

    },
});

export const {login,logout} = userSlice.actions;
export default userSlice.reducer;
