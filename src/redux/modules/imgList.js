export const SETIMGLIST = 'SETIMGLIST'; 
export default (state = {}, action = {})=>{
	switch(action.type){
		case SETIMGLIST:
			return action.payload;
		default:
			return state;
	}
}
export const setImgList = (ImgList)=>{
	return{
		type: SETIMGLIST,
		payload:ImgList
	}	
}
export const unsetImgList = ()=>{
	return {
		type: SETIMGLIST,
		payload:[]
	}
}