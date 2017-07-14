export const SCOREADD = 'SCOREADD';
export const SCORESUB = 'SCORESUB';
const initialState = {
	score:0
}

export default (state = initialState, action={})=>{
	switch(action.type){
		case SCOREADD:
			return {...state, score: state.score + action.payload };
		case SCORESUB:
			return {...state, score: state.score - action.payload };
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