import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import { useRouter } from "next/router";

const Catalouge = () => {
  const router = useRouter()
  const { searchInput } = router.query

  console.log('search input: ', searchInput)

  return (
    <div className = 'catalog-page'>
      <Navbar />
      <h1 className = 'catalouge-header'>Explore</h1>

      <main className = 'catalouge'>
        <ToolCard image = 'sdfs' link = 'dsafklja' paragraph = 'sdafakl' />
      </main>
    </div>
  )
}

export default Catalouge