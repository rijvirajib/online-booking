import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  let store = createStore(rootReducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
