import React, { useContext } from 'react'
import Information from './Information'
import Search from './Search'
import { NewsDataContext } from '../NewData'
function Home() {
    const { toogleComponent } = useContext(NewsDataContext);
    return (
        <>
            <div className="hero flex-div">
                <div className="content">
                    {toogleComponent ? <Search /> : <Information />}
                </div>
            </div>
        </>
    )
}

export default Home
