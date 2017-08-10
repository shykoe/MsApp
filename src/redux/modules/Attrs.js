export const INITATTRS = 'INITATTRS';
export const FETCHATTRS = 'FETCHATTRS';
export const CHANGEATTRS = 'CHANGEATTRS';
const initialState = {};
export default (state = initialState, action={})=>{
	switch(action.type){
		case INITATTRS:
			return action.payload.reduce((pre,item)=>{pre[item]=0; return pre},{});
		case CHANGEATTRS:
			state[action.payload] = action.meta;
			return state;
		default :
			return state;
	}
}
export const initAttrs = (attrs)=>{
	return {
		type:INITATTRS,
		payload:attrs
	};
}
export const fetchAttrs = (picName)=>{
	return {
		type:FETCHATTRS,
		payload:picName
	};
}
export const changeAttrs = (name,value)=>{
	return {
		type:CHANGEATTRS,
		payload:name,
		meta:value
	}
}