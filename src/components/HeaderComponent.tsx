import { Search, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import pro from '@/utils/product.json'

type p={
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    category: string;
    image: string;
}

export const HeaderComponent =({cards,results}:{cards:number,results:(e:p[])=>void})=>{
    
    const Handle = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const result  = pro.filter((i)=>{
            return i.name.toLowerCase().includes(e.target.value.toLowerCase())
        }) 

        results(result)
    }

    return(
        <header className="flex flex-col sm:flex-row items-center gap-4 sm:h-[60px]  sm:justify-between sm:p-4 fixed bg-white w-full">
            <nav className="border p-2 rounded font-poppins hover:bg-zinc-200 cursor-pointer">
                <Link to="/">
                    <span className="text-red-600  font-montserrat font-[font-weight:700]">E</span>
                    <span>-commerce</span>
                </Link>
            </nav>
            <nav className="hidden grow p-2 rounded sm:flex justify-center items-center">
                <ul className="flex items-center font-poppins sm:justify-between sm:w-[80%] lg:w-[60%]">
                    <li className="hover:text-white hover:bg-zinc-700 rounded p-2 transition-colors sm:mr-8">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-white hover:bg-zinc-700 rounded p-2 transition-colors">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="grow flex items-center justify-center  rounded p-2 transition-colors">
                        <section className="flex border p-2 rounded gap-2 min-w-[320px] max-w-[350px]">
                            <input type="text" placeholder="type a category name" onChange={Handle} className="grow outline-none border-none font-poppins"/>
                            <Search />
                        </section>
                    </li>
                </ul>
            </nav>
            <nav className="p-2 min-w-[120px] flex items-center justify-center">
                <ShoppingCart size={45} className="p-2 rounded hover:bg-zinc-600 hover:text-white font-montserrat cursor-pointer relative"/>
                {(cards > 0 ) && <span className="absolute top-1 right-[43px]  min-w-[20px] rounded-[50px] text-center text-white bg-red-600 font-montserrat text-sm">{cards}</span>}
            </nav>
        </header>
    )
}