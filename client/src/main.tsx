import './dtr/adaptor/managers/Style.manager.global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App'
import NetworkManager from './dtr/adaptor/managers/Network.manager'

const queryClient = new QueryClient(NetworkManager.QUERY_CLIENT_CONFIG)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
