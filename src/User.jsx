const User = (props) => {
   const {name, age, image} = props
   return (
      <div className="content">
         <div className="imageCont">
            <img className="img" src={image} alt={name} />
         </div>
        <div>
         <h2>{name}</h2>
         <p>{age}</p>
        </div>
      </div>
   )
}

export default User