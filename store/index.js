import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import reducers from "../reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["likedJobs"],
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  pReducer,
  {},
  compose(
    applyMiddleware(thunk)
    // autoRehydrate()
  )
);

export const persistor = persistStore(store);

export default store;
