import { dinamicPriceBasecOnHour } from '@/utils/dinamicPrice'
import { Star } from 'lucide-react'

type p={
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    category: string;
    image: string;
}

export const Product =({clicked,products}:{clicked:()=>void,products:p[]})=>{
    return(
        <section className="grow flex items-center flex-wrap justify-center gap-3 p-3 pt-[150px] sm:pt-[65px]">
            {products.map((e)=>(
                <div key={e.id}  className=' gap-2  font-poppins border border-zinc-600 p-2 rounded flex flex-col items-center min-h-[450px] sm:w-[300px]'>
                    <img src={e.image} alt={e.name} className='w-[200px] h-[200px] object-cover rounded' />
                    <div className='p-2 flex flex-col bg-zinc-100 rounded grow'>
                        <h1 className='text-xl font-montserrat sm:my-3'>{e.name}</h1>
                        <span className='text-sm p-1 flex text-start justify-start'>{e.description.slice(0,150)}...</span>
                        <span className='text-sm text-zinc-400 font-montserrat flex items-center justify-between p-2'>
                            {e.category}
                            <span className='text-black font-poppins'>{dinamicPriceBasecOnHour(e.price)} €</span>
                        </span>
                        <span className='flex items-center justify-between gap-1'>
                            <span className='flex items-center justify-start gap-1'>
                            {e.rating} <Star fill='yellow' color='yellow'/></span>
                            <span onClick={clicked} className='bg-blue-500 h-[45px] p-2 hover:text-white cursor-pointer rounded flex items-center justify-center'>Add to card</span>
                        </span>
                    </div>
                </div>
            ))}
        </section>
    )
}