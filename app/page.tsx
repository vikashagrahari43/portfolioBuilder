import React from 'react'
import LandingPage from '@/components/Landing'
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'
function page() {
  return (
    <>
      <div className="bg-black/[0.96] h-screen w-full ">
       <Spotlight
        className="absolute left-1 top-1 h-[2900px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-[pulse_3s_infinite] rounded-full "
        fill="white "
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
     
 
 <LandingPage />
    </div>
    </>
  )
} 

export default page