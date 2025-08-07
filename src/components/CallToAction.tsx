export default function CallToAction() {
  return (
    <div className="px-8 text-white space-y-5 sm:space-y-20 absolute z-50 text-lg max-w-xs sm:max-w-xl lg:max-w-3xl mt-5">
      <div className="text-lg">
        <h1 className="text-2xl md:text-4xl font-bold">Você não está só</h1>
        <h2 className="text-lg lg:text-2xl font-bold">
          Em caso de violência denuncie
        </h2>
      </div>
      <p className="max-w-96">
       Site produzido para um projeto de extensão  da UNIASSELVI.
      </p>

      <div className="flex justify-around w-full flex-col sm:flex-row gap-4">
        <button
          type="button"
          className="bg-transparent hover:bg-purple-2 border-2 py-2 px-10 rounded-xl border-purple-1"
        >
          Disque 100
        </button>
        <button
          type="button"
          className="bg-purple-1/25 hover:bg-purple-3/70 border-2 py-2 px-10 rounded-xl border-purple-1"
        >
         Fale com um especialista
        </button>
      </div>
    </div>
  )
}
