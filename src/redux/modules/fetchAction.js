export const FETCHIMGLIST = 'FETCHIMGLIST';
export const FETCHIMG = 'FETCHIMG';
export fetchImgList = (value = 10) =>{
	type:FETCHIMGLIST,
	payload:value,
	meta:{fetch:FETCHACTION}
}
export fetchImg = (imgPath) =>{
	type:FETCHIMG,
	payload:imgPath,
	meta:{fetch:FETCHIMG}
}