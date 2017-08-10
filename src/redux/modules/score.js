export const SCOREADD = 'SCOREADD';
export const SCORESUB = 'SCORESUB';
export const INITCURRSCORE = 'INITCURRSCORE';
export const FAILUREADD = 'FAILUREADD';
const initialState = {
	score:0,
	current:{failure:0}
}

export default (state = initialState, action={})=>{
	switch(action.type){
		case SCOREADD:
			return {...state, score: state.score + action.payload };
		case SCORESUB:
			return {...state, score: state.score - action.payload };
		case INITCURRSCORE:
			return {...state, current:{failure:0}};
		case FAILUREADD:
			return {...state, current:{failure:state.current.failure + 1}};
		default :
			return state;

	}
}
export const scoreAdd = (value = 1) =>{
	return {
		type:SCOREADD,
		payload:value
	}
}
export const scoreSub = (value = 1) =>{
	return {
		type:SCORESUB,
		payload:value
	}
}
export const initCurrScore = () =>{
	return {
		type:INITCURRSCORE,
	}
}
export const failureAdd = () =>{
	return {
		type:FAILUREADD
	}
}