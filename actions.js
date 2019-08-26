import uuid from uuid;

 export const ADD_COMMENT = 'ADD_COMMENT';
 export const REMOVE_COMMENT = 'REMOVE_COMMENT';
 export const EDIT_COMMENT = 'EDIT_COMMENT';
 export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
 export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
};

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        text,
        id
    }
};

function thumbUp(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
};

function thumbDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
};

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text, id) => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundthumbUp = (id) => dispatch(thumbUp(id));
const boundthumbDown = (id) => dispatch(thumbDown(id));