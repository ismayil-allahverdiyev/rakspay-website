import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './modules/route';
import { ErrorPageView } from './modules/error';
import { HomePageView } from './modules/home';
import TransactionPageView from './modules/transaction';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPageView />,
      children: [
        { path: '/', element: <HomePageView /> },
        { path: '/transaction', element: <TransactionPageView /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}