import './dtr/adaptor/managers/style/Style.manager.global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import NetworkManager from './dtr/adaptor/managers/network/Network.manager'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './dtr/adaptor/components/AppRouter'

const queryClient = new QueryClient(NetworkManager.QUERY_CLIENT_CONFIG)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
