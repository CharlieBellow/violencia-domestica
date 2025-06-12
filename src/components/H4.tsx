
type props = {
  text: string}
export default function H4({text} : props) {
  return (
    <h4 className='text-3xl font-bold text-primary font-roboto' >{text}</h4>
  )
}
