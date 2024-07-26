import App from './App.tsx'
import { ViteReactSSG } from 'vite-react-ssg'
import './index.css'


export const createRoot = ViteReactSSG({
  routes: [
    {
      path: '/',
      index: true,
      Component: App,
    },
    {
      lazy: () => import('./json.tsx'),
      path: '/json',
    }
  ]
})