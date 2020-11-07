const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;


// INITIAL STATE
const initialBookState = {
    numberOfBooks: 23,
    price: 46
};

const initialDVDState = {
    numberOfDVDs: 56,
    price: 168
};
// INITIAL STATE


// ACTION DECLARATION
const BUY_BOOKS = "BUY_BOOKS";
const BUY_DVDS = "BUY_DVDS";

const buyBooks = () => ({
    type: BUY_BOOKS,
    info: "Buys books"
});

const buyDVDs = () => ({
    type: BUY_DVDS,
    info: "Buys DVDs"
});
// ACTION DECLARATION


// REDUCER DECLARATION
const bookReducer = (state = initialBookState, action) => {
    switch (action.type) {
        case BUY_BOOKS:
            return { ...initialBookState, numberOfBooks: state.numberOfBooks - 1, price: state.price - 2 };
        default:
            return state;
    }
};

const DVDReducer = (state = initialDVDState, action) => {
    switch (action.type) {
        case BUY_DVDS:
            return { ...initialDVDState, numberOfDVDs: state.numberOfDVDs - 1, price: state.price - 3 };
        default:
            return state;
    }
};
// REDUCER DECLARATION


// DISPATCHING AND SUBSCRIBING OF ACTIONS
const rootReducer = combineReducers({
    books: bookReducer,
    dvds: DVDReducer
});
const store = createStore(rootReducer);
console.log("Redux initial store: ", store.getState());
const unsub = store.subscribe(() => (console.log('Updated Store', store.getState())));
store.dispatch(buyBooks());
store.dispatch(buyDVDs());
store.dispatch(buyBooks());
unsub();
// DISPATCHING AND SUBSCRIBING OF ACTIONS
