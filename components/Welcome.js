import Image from "next/image"

const Welcome = () => {
  return (
  <div className='bg-black text-center'>
     <div className='w-60 mx-auto'>
     <Image src={"/logo-movie.png"} width={200} height={200}
     layout='responsive'/>
     </div>
  </div>
  )
}

export default Welcome