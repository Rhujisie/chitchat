import {Outlet} from 'react-router-dom'


export default function Layout(){

    return(
        <div className='outlet'>
           <Outlet/>
           {/* check */}
        </div>

    )
}