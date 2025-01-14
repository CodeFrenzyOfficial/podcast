import React from "react"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function PodcastEditSheet({children}:{children: React.ReactNode}) {
  return (
      <Sheet>
          <SheetTrigger>{children}</SheetTrigger>
          <SheetContent>
              <SheetHeader className='w-full h-full space-y-10'>
                  <SheetTitle>Edit Podcast Video</SheetTitle>
                  <div className='h-full flex flex-col justify-between items-start'>
                      {/* Inputs */}
                      <div className='space-y-5'>
                          
                      </div>

                      {/* Login Signup Button */}
                      <div className='w-full flex items-center justify-between'>
                          <Button>Save</Button>
                      </div>
                  </div>
              </SheetHeader>
          </SheetContent>
      </Sheet>
  )
}