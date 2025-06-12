import H6 from '@/components/H6'

export default function UtilsContacts() {
  return (
    <div className='flex flex-col gap-4 text-xl'>
      <H6 text={'Contatos Úteis'}></H6>

      <p className=''>
        Em caso de violência doméstica, devemos sim, meter a colher. É dever de
        todo cidadão denunciar.
      </p>
      <p className=''>
        Caso precise denunciar alguma situação de violência, esses são os
        telefones para contato:
      </p>

      <div className=''>
        <div className='flex gap-4'>
          <p>Polícia Militar</p> <span className='text-primary font-bold'>190</span>
        </div>
        <div className='flex gap-4'>
          <p>Delegacia da Mulher</p> <span className='text-primary font-bold'>180</span>
        </div>
        <div className='flex gap-4'>
          <p>Disque Denúncia</p> <span className='text-primary font-bold'>100</span>
        </div>
      </div>
    </div>
  )
}
