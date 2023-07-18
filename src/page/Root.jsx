import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { FirebaseAPIProvider } from '../context/FirebaseAPIContext';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

export default function Root(){

    return(
        <div id="wrap">
            <FirebaseAPIProvider>
                <Header />
                <QueryClientProvider client={queryClient}>
                    <Outlet />
                </QueryClientProvider>
            </FirebaseAPIProvider>
        </div>
    )
}