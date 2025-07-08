import ContactUs from '@/app/contact/components/ContactUs'
import UtilsContacts from '@/app/contact/components/UtilsContacts'

export default function Home() {
  return (
    <div className='relative m-10 grid grid-cols-2 gap-10 overflow-hidden '>
  <UtilsContacts/>
      <ContactUs />
    </div>
  )
}
