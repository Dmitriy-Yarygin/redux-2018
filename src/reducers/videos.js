const ADD_VIDEO = 'ADD_VIDEO';
const EDIT_VIDEO = 'EDIT_VIDEO';
const REMOVE_VIDEO = 'REMOVE_VIDEO';

const INIT = [    
    {id:'1', title: 'Indila', url:'https://youtu.be/DF3XjEhJ40Y', tags:'indila'},
    {id:'2', title: 'Indila 2', url:'https://youtu.be/K5KAc5CoCuk', tags:'indila'},
    {id:'3', title: 'Indila 23', url:'https://youtu.be/0wdqF5zGQ_c', tags:'indila'},
];

export default function videosReducer(state = INIT, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_VIDEO:
            const newItem = {
                id: String(Math.random()),
                title: payload.title,
                url: payload.url,
                tags: payload.tags,
            };
            return [newItem, ...state];
            ///////////////////////////////////////////////////////////////////////
        case EDIT_VIDEO:
            // const {id, title, tags} = payload;
            console.log(`EDIT_VIDEO payload.id = ${payload.id}`);
            let newState = state.map(  
                ( item ) => {
                    if (item.id === payload.id) {
                        item.title = payload.title;
                        item.tags = payload.tags;                       
                    }
                    return item;
                }
            );
            return newState;

        case REMOVE_VIDEO:
            newState = state.filter(  
                ({ id }) => (id !== payload.id)
            );
            return newState;
    
        default:
            return state;
    }    
}

export const addVideo = ({ title, url, tags }) => ({
    type: ADD_VIDEO,
    payload: { title, url, tags },
});

export const editVideo = ({id, title, tags}) => ({
    type: EDIT_VIDEO,
    payload: { id, title, tags },
});

export const deleteVideo = id => ({
    type: REMOVE_VIDEO,
    payload: { id },
});