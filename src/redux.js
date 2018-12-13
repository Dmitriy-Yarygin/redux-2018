import {createStore } from 'redux'

const createId = () => Math.random();
const initialState = {
    books: [],
    readers: [],
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'ADD_BOOK':
            return {
                ...state,
                books: [...state.books, { id: createId(), title: payload}]
            };
        case 'UPDATE_BOOK':
            return {
                ...state,
                books: state.books.map( (item) => {
                    if (item.id === payload.id) {
                        return {...item, title: payload.newName};
                    }
                    return item;
                } ),
                
            }
            // return state.map( (item) => {
            //     if (item.id === payload.id) {
            //         return {...item, title: payload.newName};
            //     }
            //     return item;
            // } );
        // case 'REMOVE_BOOK':
        //     return state.filter( book => book.id !== payload);
        default:
            return state;
    }
}

const store = createStore(reducer);

const addBook = (bookName) => ({type: 'ADD_BOOK', payload: bookName});
const updateBook = (id, newName) => ({type: 'UPDATE_BOOK', payload: {id, newName}});
// const removeBook = (id) => ({type: 'REMOVE_BOOK', payload: id});


store.subscribe(() => {
    console.log("From subscribe", store.getState());

});
console.log("addBook ---------------------------------");
store.dispatch( addBook('Book 1') );
store.dispatch( addBook('Book 2') );

console.log("UPDATE ---------------------------------");
store.dispatch( updateBook( store.getState().books[0].id, 'newName') );


console.log("REMOVE ---------------------------------");
// store.dispatch( removeBook(store.getState()[0].id) );
// store.dispatch( removeBook(store.getState()[0].id) );