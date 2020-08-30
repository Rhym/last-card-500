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
  total: number;
};

type State = {
  users: UserType[];
  round: number;
};

type Action =
  | { type: "RESET_GAME" }
  | { type: "DECREMENT_ROUND" }
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
      total: 0,
    },
    {
      id: 2,
      title: "Mike",
      score: [],
      total: 0,
    },
  ],
  round: 0,
};

let nextId = initialState.users.length + 1;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "RESET_GAME":
      return {
        ...state,
        users: state.users.map((user) => {
          user.score = [];
          user.total = 0;

          return user;
        }),
        round: 0,
      };
    case "DECREMENT_ROUND":
      return {
        ...state,
        round: state.round - 1,
      };
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
            const EXISTING_ROUND_INDEX = _findIndex(user.score, {
              round: action.round,
            });

            /**
             * If there's a value for the current round
             * Replace it, otherwise create a new round value.
             */
            if (EXISTING_ROUND_INDEX !== -1) {
              user.score[EXISTING_ROUND_INDEX] = {
                round: action.round,
                value: action.value,
              };
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

          user.total = user.score.reduce(
            (accumulator, score) => accumulator + parseInt(score.value, 10),
            0
          );

          return user;
        }),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [
          ...state.users,
          { id: nextId++, score: [], title: action.title, total: 0 },
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
