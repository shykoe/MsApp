export const LOGIN = 'LOGIN';
export const LOGINSUCESS = 'LOGINSUCESS';
export const LOGINFAIL = 'LOGINFAIL';
export const USERCHECK = 'USERCHECK';
const initialState = {userName:null};
export default (state = initialState, action={})=>{
	switch(action.type){
		case LOGINSUCESS:
			return {...state, userName:action.payload};
		default :
			return state;
	}
}
export const login = (user,passwd)=>{
	return {
		type:LOGIN,
		payload:{user:user, passwd:passwd}
	};
}
export const userCheck = ()=>{
	return {
		type:USERCHECK,
	};
}