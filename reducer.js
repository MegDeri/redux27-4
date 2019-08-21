import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

const initialState = {
    comments: [],
    users: []
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_COMMENT:
			return Object.assign({}, state, {
				comments: [{
					id: action.id,
					text: action.text,
					votes: 0
				}, ...state] // does this add only "comments" from "state" or whole "state"?
            });
            
		case REMOVE_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id)
            });

        case EDIT_COMMENT:
                return Object.assign({}, state, {
                    comments: state.comments.map(comment => comment.id === action.id ?
                    { ...state, text: action.text} : comment)
                });
                
        case THUMB_UP_COMMENT:
                return Object.assign({}, state, {
                    comments: state.comments.map(comment => comment.id === action.id ?
                    { ...state, votes: state.votes + 1} : comment)
                });

        case THUMB_UP_COMMENT:
                return Object.assign({}, state, {
                    comments: state.comments.map(comment => comment.id === action.id ?
                    { ...state, votes: state.votes - 1} : comment)
                });

            default:
                return state;
       
   }
}