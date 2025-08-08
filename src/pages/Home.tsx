import { Product } from "@/components/allProducts"
import { HeaderComponent } from "@/components/HeaderComponent"
import { useEffect, useState } from "react"
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

export const Home = ()=>{
    const [card,setCard] = useState<number>(0)
    const [list,setlist]=useState<p[]>([])

    useEffect(()=>{
        setlist(pro)
    },[])
    return(
        <main className="">
            <HeaderComponent cards={card} results={(e:p[])=>setlist(e)}/>
            <Product clicked={()=>{setCard((c)=>c+1)}} products={list}/>
        </main>
    )
}