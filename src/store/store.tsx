import { useReducer } from "react";
import { createContainer } from "react-tracked";
import _findIndex from "lodash/findIndex";

export type ScoreType = {
  round: number;
  value: string;
};

export type UserType = {
  id: number;
  title: string;
  score: ScoreType[];
};

type State = {
  users: UserType[];
  round: number;
};

type Action =
  | { type: "INCREMENT_ROUND" }
  | { type: "ADD_USER_ROUND_SCORE"; id: number; round: number; value: string }
  | { type: "ADD_USER"; title: string }
  | { type: "DELETE_USER"; id: number };

const initialState: State = {
  users: [
    {
      id: 1,
      title: "Ryan",
      score: [],
    },
    {
      id: 2,
      title: "Emma",
      score: [],
    },
  ],
  round: 0,
};

let nextId = initialState.users.length + 1;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT_ROUND":
      return {
        ...state,
        round: state.round + 1,
      };
    case "ADD_USER_ROUND_SCORE":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            if (user.score.length <= 0) {
              user.score = [{ round: action.round, value: action.value }];
            } else {
              const EXISTING_ROUND_VALUE = _findIndex(user.score, {
                round: action.round,
              });
              if (EXISTING_ROUND_VALUE !== -1) {
                console.log("Existing round value");
                user.score = user.score.map((score) => {
                  if (score.round !== action.round) {
                    return score;
                  }

                  return {
                    round: action.round,
                    value: action.value,
                  };
                });
              } else {
                user.score = [
                  ...user.score,
                  {
                    round: action.round,
                    value: action.value,
                  },
                ];
              }
            }
          }

          return user;
        }),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [
          ...state.users,
          { id: nextId++, score: [], title: action.title },
        ],
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};

const useValue = () => useReducer(reducer, initialState);

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);
