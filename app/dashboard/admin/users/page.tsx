'use client'

import UserEditSheet from "@/components/@dashboard/admin/user-edit-sheet/UserEditSheet";
import useUserStore from "@/store/users"
import { useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Page() {
    const { users, fetch_users } = useUserStore();
    useEffect(() => {
        fetch_users();
    }, [])
    return (
        <div className="p-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {
                    users && users?.length > 0 ?
                        < table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        First name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Last name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Role
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user: any) => {
                                        return (
                                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {user.f_name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {user.l_name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.email}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.phone}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.role}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <UserEditSheet user={user}>
                                                        <div className="flex items-center">
                                                            <div className="flex items-center relative transition-all duration-300 group">
                                                                <p className="transition-all duration-300 z-20 relative left-0 group-hover:-left-5">
                                                                    Edit
                                                                </p>
                                                                <div className="text-xl transition-all duration-300 opacity-0 group-hover:opacity-100 absolute right-0 top-[10%] z-0">
                                                                    <IoIosArrowRoundForward />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </UserEditSheet>
                                                </td>
                                            </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                        :
                        <div className="p-4 text-center font-semibold">No users added</div>
                }
            </div>
        </div >
    )
}