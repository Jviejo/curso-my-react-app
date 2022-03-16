import React from 'react'
import { QueryClient , QueryClientProvider} from 'react-query'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import './Home.css'


const queryClient = new QueryClient()
export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="container d-flex flex-column justify-content-between todo">
                <Header></Header>
                <div className='flex-grow-1'>
                    <Outlet />
                </div>
                <Footer></Footer>
            </div>
        </QueryClientProvider>
    )
}
