interface Props {
  title: string
  description: string
}

export const Card = ({ title, description }: Props) => {
  return (
    <div className='bg-white p-2 md:p-8 rounded-xl xl:w-[500px] xl:h-[246px] xl:p-[30px]'>
      <h3 className='text-[28px] md:text-[40px] border-b-2 border-primary'>
        <strong>{title}</strong>
      </h3>
      <p className='text-[16px] md:text-[20px] mt-2'>{description}</p>
    </div>
  )
}
