import React, {useState, useEffect} from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useRouter  } from "next/router";
import Link from "next/link";

const Home = () => {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')

  // handle serach input change
  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const handleSearch = () => {
    router.push({
      pathname: '/catalouge',
      query: { searchInput }
    })
  }

  const handleSearchKeyDown = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      <Navbar />
      
      <main className = 'search-bar-area'>
        <div className = 'searchbar'>
          <input 
            placeholder = 'Search For All Tools'
            value = {searchInput}
            onChange = {handleSearchInput}
            onKeyDown = {handleSearchKeyDown}
          />

          <button onClick = {handleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </main>

      {/* 
      <section className = 'example-showcase-section'>
        <div className = 'example-item'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>

          <h1>Only the best</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laudantium facilis voluptatem minus deserunt placeat sequi eaque quae nihil aspernatur?</p>
        </div>

        <div className = 'example-item'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>

          <h1>Purpose</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisiinctio porro similique atque expedita impedit, praesentium neque aliquid quas quisquam nostrum. Cupiditate molestiae a veritatis accusamus.</p>
        </div>

        <div className = 'example-item'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>

          <h1>Easy</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta excepturi commodi dolore consequatur reprehenderit quam illo nobis! Facere provident quaerat, hic aliquam natus numquam voluptatem.</p>
        </div>
      </section>
      */}

      <section className = 'index-website-catagory-website'>
        <Link href = '#'>Find Websites</Link>

        <p>Explore our carefully curated collection of websites, handpicked to enhance your development experience.</p>
      </section>

      <section className = 'index-website-catagory-packages'>
        <Link href = '#'>Find Packages</Link>

        <p>Discover our comprehensive catalog of valuable development packages and APIs from npm, pip, and beyond. Ideal for sourcing top-notch tools to optimize your development and bring your dream project to life.</p>
      </section>

      <section className = 'index-website-catagory-add'>
        <Link href = '#'>Add To Our Creation</Link>

        <p>Effortlessly expand our extensive network of developer tools for the benefit of all. Additionally, showcase your own developer creations and receive recognition for your contributions.</p>
      </section>

      <Footer />
    </>
  )
}

export default Home