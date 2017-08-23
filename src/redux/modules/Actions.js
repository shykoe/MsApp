export const PICPRESS = 'PICPRESS';
export const PICRELEASE = 'PICRELEASE';
export const GAMESTART = 'GAMESTART';
export const MSGPOST = 'MSGPOST';
export const SUBMIT = 'SUBMIT';
export const SUBMITED = 'SUBMITED';
export default (state = {isSubmit:false}, action = {})=>{
	switch(action.type){
		case PICPRESS:
			return action.payload;
		case PICRELEASE:
			return action.payload;
		case MSGPOST:
			return action.payload;
		case SUBMITED:
			return {...state,isSubmit:false};
		case SUBMIT:
			return {...state,isSubmit:true};
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
export const MsgPost = (payload,score=10)=>{
	return {
		type:MSGPOST,
		payload:{msg:payload,score:score},

	}
}
export const Submit = ()=>{
	return {
		type:SUBMIT
	}
}