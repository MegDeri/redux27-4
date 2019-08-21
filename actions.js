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

function thumbUp(likes) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        likes: likes++
    }
};

function thumbDown(dislikes) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        dislikes: dislikes++
    }
};

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text, id) => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundthumbUp = (likes, id) => dispatch(thumbUp(likes, id));
const boundthumbDown = (dislikes, id) => dispatch(thumbDown(dislikes, id));