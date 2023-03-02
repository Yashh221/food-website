import React from 'react'
import Item from '../components/Item';
import datas from '../data'

function Homepage() {
  return (
    <div>
        <div className="row">
            {datas.map(datas=>{
                return <div className="col-md-4 p-3">
                    <div>
                        <Item datas={datas}/>
                    </div>
                    </div>
            })}
        </div>
    </div>
  )
}
export default Homepage;