export const PICPRESS = 'PICPRESS';
export const PICRELEASE = 'PICRELEASE';
export default (state = {}, action = {})=>{
	switch(action.type){
		case PICPRESS:
			return action.payload;
		case PICRELEASE:
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