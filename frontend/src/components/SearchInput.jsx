import useLogout from '../hooks/useLogout';

import { IoIosSearch } from "react-icons/io";
import { BiLogOut } from 'react-icons/bi'

function SearchInput() {
  const { logout } = useLogout();
  return (
    <form className="flex items-centre gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full w-full" />

        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
            <IoIosSearch className="w-5 h-5 outline-none"/>
        </button>
        <button type="submit" className="btn btn-circle bg-red-500 text-white">
            <BiLogOut className="w-6 h-6 text-white cursor-pointer" onClick={logout} />
        </button>
    </form>
  )
}

export default SearchInput