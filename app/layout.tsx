import { SessionProvider } from '@components/SessionProvider';
import SidePage from '@components/SidePage';

import '@styles/globals.css';
import { getServerSession } from 'next-auth';
import Login from '@components/Login';
import { options } from './api/auth/[...nextauth]/options';
import ClientProvider from '@components/ClientProvider'


export default async function RootLayout ({
  children,
}: {
    children: React.ReactNode;
}) {
  const session = await getServerSession(options);
  console.log(session);
  return (
    <html lang="en">
        <body>
          <SessionProvider session={session}>
            {!session ? ( 
            <Login/>
            ) : (
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <SidePage/>
          </div>
          
          {/* ClientProvider - Notification */}
          <ClientProvider />

            <div className='bg-[#343541] flex-1'> {children} </div>
        </div>
            )}
        </SessionProvider>
        </body>
    </html>
    
  )
}
