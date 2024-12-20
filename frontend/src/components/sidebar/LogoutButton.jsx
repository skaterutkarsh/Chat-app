import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
function LogoutButton() {
  const {loading,logout}=useLogout();
  return (
    <div className='mt-auto'>
			{!loading?(
				<BiLogOut className='w-6 h-6 text-white cursor-pointer'
        onClick={logout}  />):
        (
          <div className="loading loading-spinner"></div>
        )}
			
			
		</div>
  )
}

export default LogoutButton