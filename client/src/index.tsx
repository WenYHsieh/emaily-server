import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers'
import reduxThunk from 'redux-thunk'

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxThunk),
})

export type AppDispatch = typeof store.dispatch
console.log(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
