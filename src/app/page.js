
import { 
  Hero,
  Footer,
  NewArrivals,
  ShoeOffer,
  ClientRew ,
} from '@/section'
import Navigation from '@/assets/component/Navigation'
import Provider from './provider'

export default function Home() {
  return (
<Provider attribute="class">
    <main className='relative mx-auto'>
    <Navigation />
    <section className='sm:pl-16 pl-8 sm:pr-16 pr-8 sm:pb-24 pb-12'>
       <Hero />
    </section>
    <section className='border-2 sm:px-16 px-8 sm:py-4 py-12'>
      <NewArrivals />
    </section>
  
    
    <ShoeOffer />
    <ClientRew />
    <Footer />
  
    </main>
</Provider>
  )
}
