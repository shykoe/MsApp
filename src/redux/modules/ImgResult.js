export const RSULTIMG = 'RSULTIMG';
export const UNSETRESULT = 'UNSETRESULT';
export default (state = {Result:false,isRight:false}, action = {})=>{
	switch(action.type){
		case RSULTIMG:
			return action.payload;
		case UNSETRESULT:
			return action.payload;
		default:
			return state;
	}
}
export const SetResult = (result)=>{
	return{
		type: RSULTIMG,
		payload:{Result:true,isRight:result},
	}	
}
export const UnSetResult = ()=>{
	return{
		type: UNSETRESULT,
		payload:{Result:false,isRight:false},
	}	
}