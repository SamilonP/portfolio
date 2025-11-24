import React from 'react'
import { useRouter } from 'next/navigation'

function Navbar({children}: any) {
    const router = useRouter()

    const GoToPage = (name: string) => {
        router.push(name)
    }

    return (
        <div>
            <nav className="p-0.5 w-full bg-linear-to-b from-amber-400 to-amber-800">
                <div className="bg-linear-to-t from-amber-400 to-amber-800 flex justify-between">
                    <div className='flex justify-start'>
                        {children}
                    </div>
                    <div className='flex justify-end'>
                        <button onClick={() => {GoToPage("/")}} id="buton">maine</button>
                        <button onClick={() => {GoToPage("/projects")}} id="buton">projecst</button>
                        <button onClick={() => {GoToPage("/contacts")}} id="buton">contacts</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar