export interface State {
  counter: number;
}

export const initialState = {
  counter: -1
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD SUCCESS':
    case 'DECREASE SUCCESS':
    case 'INCREASE SUCCESS':
      return { ...state, counter: action.payload };
  }
}
