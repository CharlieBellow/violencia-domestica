import Image from 'next/image'
import logo from '../../../../assets/uniasselvi-pgn-tranp.png'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactUs() {
  return (
    <div className='flex flex-col gap-4'>
      <div>Contate-nos</div>
      <Image src={logo} alt='logo da uniasselvi' width={120} className='m-4' />
      <div className=''>
        <span className='text-primary'>email:</span> <p>email@email.com</p>
      </div>
      <div className=''>
        <span className='text-primary'>Endereço:</span>
        <p>Rua Dr. Pedrinho, nº 79, Bairro Rio Morto, CEP 89082-262.</p>
      </div>{' '}
      <div className=''>
        <span className='text-primary'>Tel:</span>
        <p>(47) 3301-6100</p>
      </div>
      <div className='flex gap-4 items-center'>
          <FaWhatsapp />
        <Link href='wa.me/+554733016100'>
          <button>WhatsApp</button>
        </Link>
      </div>
    </div>
  )
}
