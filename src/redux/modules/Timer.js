export const SETTIMER = 'SETTIMER';
export const RESETTIMER = 'RESETTIMER';
export const TIMERTICK = 'TIMERTICK';
export const TIMEREND = 'TIMEREND';
export default (previousState = 5000, action = {})=>{
	switch(action.type){
		case SETTIMER:
			return action.payload;
		case RESETTIMER:
			return action.payload;
		case TIMERTICK:
			if(previousState > 0)
			return previousState - 1000;
		case TIMEREND:
			return 0;
		default:
			return previousState;
	}
}
export const setTimer = (val = 30000)=>{
	return{
		type: SETTIMER,
		payload:val,
	}	
}
export const timerTick = ()=>{
	return{
		type:TIMERTICK,
	}
}
export const timerEnd = ()=>{
	return {
		type:TIMEREND
	}
}
export const resetTimer = (val = 30000)=>{
	return{
		type: RESETTIMER,
		payload:val
	}	
}