
type props = {
  text: string}
export default function H6({text} : props) {
  return (
    <h4 className='text-xl font-bold text-primary font-roboto' >{text}</h4>
  )
}
