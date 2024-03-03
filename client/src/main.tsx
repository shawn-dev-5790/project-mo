import './_core_/adaptor/managers/style/css/variables.css'
import './_core_/adaptor/managers/style/css/normalize.css'
import './_core_/adaptor/managers/style/css/global.css'
import './_core_/adaptor/managers/style/css/typography.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import NetworkManager from './_core_/adaptor/managers/network/Network.manager'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './_core_/adaptor/components/AppRouter'

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
