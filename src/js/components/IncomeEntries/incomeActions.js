//Action Creators
export function updateIncomeDescription(description){
    return{
        type: 'UPDATE_INCOME_DESCRIPITON',
        payload: { description }
    };
}

export function updateIncomeAmount(amount) {
    return {
        type: 'UPDATE_INCOME_AMOUNT',
        payload: { amount }
    };
}

export function addIncome ( description, amount){
    return {
        type: 'ADD_INCOME',
        payload: { 
            description,
            amount: parseFloat(amount)
        }
    };
}