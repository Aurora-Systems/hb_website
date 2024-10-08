export const bg_img=(img:string)=>{
    return(
        {
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        }
    )
}
 export const bg_item=(img:string)=>{
    return(
        {
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
    )
 }