import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import Navbar from '@/components/Navbar'

const alchemyId = process.env.ALCHEMY_ID || ''
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID || ''

const { chains, publicClient } = configureChains([sepolia], [publicProvider()])

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    chains,
    autoConnect: true,
    publicClient,
    alchemyId: alchemyId,
    walletConnectProjectId: walletConnectProjectId,

    // Required
    appName: 'Web3 Nextjs ConnectKit',

    // Optional
    appDescription: 'Guide on how to connect dApps with smart contracts.',
    appUrl: '',
    appIcon: '',
  })
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen flex flex-col w-full'>
      <WagmiConfig config={config}>
        <ConnectKitProvider theme={'retro'}>
          <Navbar />
          <Component {...pageProps} />
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  )
}
