import Navbar from "@/components/Navbar"

const Contact = () => {
  return (
    <>
      <Navbar />

      <main className = 'contact-main'>
        <h1>Hit us up 💌</h1>

        <form className = 'contact-form'>
          <input placeholder = 'Name' />
          <input placeholder = 'Email' />

          <textarea placeholder = 'How can we help' />
        </form>


      </main>
    </>
  )
}

export default Contact