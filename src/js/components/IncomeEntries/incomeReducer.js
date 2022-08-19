const defaultState = {
    description: '',
    amount: '',
    lineItems: []
};

export default function IncomeReducer (state = defaultState, action){
//the state  = defaultState' above is new ES6 syntax
//for defining a default value on a parameter
const { type, payload } = action;

switch (type) {
    //Here in the case of the update description action
    case 'UPDATE_INCOME_DESCRIPTION': {
        // we'll return an object
        return {
            // with all the previous state
            ...state,
            // but overwriting the description
            description: payload.description
        };
    }

    case 'UPDATE_INCOME_AMOUNT': {
        return {
            ...state,
            amount: payload.amount
        };
    }

    case 'ADD_INCOME': {
        const { description, amount } = action.payload;
        return{
            description: '',
            action: '',
            lineItems: [
                //he we have alll the previous line items
                ...state.lineItems,
                //plus a new object
                { description, amount }
            ]
        };
    }
    default: { 
        return state; 
         }
    }
}