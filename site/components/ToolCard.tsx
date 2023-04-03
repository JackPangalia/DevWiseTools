interface Props {
  imgSrc:string,
  imgAlt:string,
  paragraph:string,
  link:string,
  name:string,

}

const ToolCard = ({imgSrc, paragraph, link, name, imgAlt}: Props) => {
  return (
    <div className = 'tool-card'>
      <img src = {imgSrc} alt = {imgAlt} />
      <p>{paragraph}</p>
      <a href = {link}>{name}</a>
    </div>
  )
}

export default ToolCard