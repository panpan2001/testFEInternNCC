import './Column.css'

const Column = ({header, src,alt,content})=>{
    console.log({header, src,alt,content})
    return (
        <div className="column ">
   <div className='header_column'>
         <strong className='strong column'>{header}</strong>
         </div>
         <div className='content_column'>
         <p > 
            
            <img className='image_content_column' src={src} alt={alt}/>
            {content}
           </p>
         </div>
        </div>
    )
}

export default Column