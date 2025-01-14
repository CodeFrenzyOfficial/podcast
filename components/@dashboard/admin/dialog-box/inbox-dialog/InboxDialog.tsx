'use client'
import * as React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function InboxDialog({ children, fullName, email, number, subject, message }: {
    children: React.ReactNode,
    fullName: string,
    email: string,
    number: string,
    subject: string,
    message: string
}) {
    return (
        <Dialog>
            <DialogTrigger className='w-full'>{children}</DialogTrigger>
            <DialogContent className='bg-gradient-to-tr from-neutral-300/70 to-neutral-100/70'>
                <DialogHeader>
                    <DialogTitle>Message Details</DialogTitle>
                    <DialogDescription className='text-black !mt-5'>
                        <div className='flex justify-between items-center space-y-2'>
                            <h2 className='text-lg font-medium'>Name:</h2>
                            <h2 className='text-lg'>{fullName}</h2>
                        </div>
                        <div className='flex justify-between items-center space-y-2'>
                            <h2 className='text-lg font-medium'>Email:</h2>
                            <h2 className='text-lg'>{email}</h2>
                        </div>
                        <div className='flex justify-between items-center space-y-2'>
                            <h2 className='text-lg font-medium'>Number:</h2>
                            <h2 className='text-lg'>{number}</h2>
                        </div>
                        <div className='flex justify-between items-center space-y-2'>
                            <h2 className='text-lg font-medium'>Subject:</h2>
                            <h2 className='text-lg'>{subject}</h2>
                        </div>
                        <div className=''>
                            <h2 className='text-lg font-medium'>Message:</h2>
                            <h2 className='text-lg'>{message}</h2>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default React.memo(InboxDialog)
