export const PICPRESS = 'PICPRESS';
export const PICRELEASE = 'PICRELEASE';
export const GAMESTART = 'GAMESTART';
export const RightType = 'Right';
export default (state = {}, action = {})=>{
	switch(action.type){
		case PICPRESS:
			return action.payload;
		case PICRELEASE:
			return action.payload;
		case RightType:
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
export const GameStart = ()=>{
	return{
		type:GAMESTART
	}
}
export const Right = ()=>{
	return {
		type:RightType,
		payload:{msg:'Cat'},
	}
}