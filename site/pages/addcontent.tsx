import React ,{ useState, useEffect } from "react"
import Navbar from "@/components/Navbar"

const AddContent = () => {
  return (
    <>
      <Navbar />

      <main className = 'addcontent-main'>
        <h1>Create. Add. Expand. Help Developers</h1>

        <form>
          <h2>Add</h2>

          <div className = 'form-option'>
            <p>Type</p>
            <select>
              <option>Website</option>
              <option>Package</option>
            </select>
          </div>

          <div className = 'form-option'>
            <p>Name</p> 
            <input />
          </div>

  


        </form>
      </main>
    </>
  )
}

export default AddContent