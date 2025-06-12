import { ReactNode } from "react"

type GridPros = {
  title: string
  content: ReactNode
}
export default function CardBlog({ content, title }: GridPros) {
  return (
    <div className='bg-primary/70 p-6 rounded-lg space-y-4'>
      <div className='bg-purple-3 rounded-lg p-4 items-center flex justify-center'>
        {title}
      </div>
      <div className='text-justify'>{content}</div>
    </div>
  )
}
