import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'
import { Toaster, toast } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <Toaster position="top-right" reverseOrder={false} 
       toastOptions={{
            // Global styles
            duration: 4000,
            style: {
              background: "#fef3c7",
              color: "#111827",
              fontWeight: "500",
              borderRadius: "10px",
              padding: "16px",
            },
          }}
      />
    <App />
    </Provider>
  </StrictMode>,
)
