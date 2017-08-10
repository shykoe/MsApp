export const PICPRESS = 'PICPRESS';
export const PICRELEASE = 'PICRELEASE';
export const GAMESTART = 'GAMESTART';
export const MSGPOST = 'MSGPOST';
export const SUBMIT = 'SUBMIT';
export default (state = {}, action = {})=>{
	switch(action.type){
		case PICPRESS:
			return action.payload;
		case PICRELEASE:
			return action.payload;
		case MSGPOST:
			return action.payload;
		default:
			return state;
	}
}
export const PicPress = (Picid)=>{
	return{
		type: PICPRESS,
		payload:{ispressed:true,picid:Picid},
	}	
}
export const PicRelease = ()=>{
	return{
		type: PICRELEASE,
		payload:{ispressed:false}
	}	
}
export const GameStart = (className)=>{
	return{
		type:GAMESTART,
		payload:className
	}
}
export const MsgPost = (payload)=>{
	return {
		type:RightType,
		payload:{msg:payload},
	}
}
export const Submit = ()=>{
	return {
		type:SUBMIT
	}
}