"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestPage = () => {


    //CLIENT SIDE NAVIGATION

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()


    const q = searchParams.get("q") // con el hook useSearchParams puedo ver el query en la url

    console.log(q)


    const handleClick = () => {
        console.log("clicked")
        router.forward()
    }



    // Hooks

    //router.push("/") // router.push provides a client side navigation to the provided route

    //router.back() // Al hacer click en el button la navegacion vuelve a la pagina anterior



    return (
        <div>
            <Link href="/" prefetch={false}>Click here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}

export default NavigationTestPage
