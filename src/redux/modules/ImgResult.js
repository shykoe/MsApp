export const RSULTIMG = 'RSULTIMG';
export const UNSETRESULT = 'UNSETRESULT';
export default (state = {Result:false}, action = {})=>{
	switch(action.type){
		case RSULTIMG:
			return action.payload;
		case UNSETRESULT:
			return action.payload;
		default:
			return state;
	}
}
export const SetResult = (Picid)=>{
	return{
		type: RSULTIMG,
		payload:{Result:true,picid:Picid},
	}	
}
export const UnSetResult = ()=>{
	return{
		type: UNSETRESULT,
		payload:{Result:false,picid:null},
	}	
}