import './_core_/managers/style/css/variables.css'
import './_core_/managers/style/css/normalize.css'
import './_core_/managers/style/css/global.css'
import './_core_/managers/style/css/typography.css'

import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import NetworkManager from './_core_/managers/network/Network.manager'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './app/AppRouter'

const queryClient = new QueryClient(NetworkManager.QUERY_CLIENT_CONFIG)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </QueryClientProvider>,
)
