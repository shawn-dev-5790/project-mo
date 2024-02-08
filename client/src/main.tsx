import './dtr/adaptor/managers/style/global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App'
import { QUERY_CLIENT_CONFIG } from './dtr/adaptor/managers/Network.manager'

const queryClient = new QueryClient(QUERY_CLIENT_CONFIG)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
