import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";

const Catalouge = () => {

  return (
    <>
      <Navbar />
      <h1 className = 'catalouge-header'>Explore</h1>

      <main className = 'catalouge'>
        <ToolCard image = 'sdfs' link = 'dsafklja' paragraph = 'sdafakl' />
      </main>
    </>
  )
}

export default Catalouge