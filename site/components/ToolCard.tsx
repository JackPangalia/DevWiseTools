import Image from "next/image"

interface Props {
  image:string
  paragraph:string
  link:string
}

const ToolCard = ({image, paragraph, link}: Props) => {
  return (
    <div className = 'tool-card'>
      <img src = 'https://cdn-icons-png.flaticon.com/512/25/25231.png' alt = 'image' />
      <p>Lorem ipsum dolor sit amet consectetur. lorem</p>
      <a href = '#'>Lorem, ipsum.</a>
    </div>
  )
}

export default ToolCard