import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { FirebaseAPIProvider } from '../context/FirebaseAPIContext';
import { QueryClient, QueryClientProvider } from 'react-query'
import { LoginContextProvider } from '../context/LoginContext';

const queryClient = new QueryClient();

export default function Root(){

    return(
        <div id="wrap">
            <FirebaseAPIProvider>
                <LoginContextProvider>
                    <Header />
                    <QueryClientProvider client={queryClient}>
                        <Outlet />
                    </QueryClientProvider>
                </LoginContextProvider>
            </FirebaseAPIProvider>
        </div>
    )
}