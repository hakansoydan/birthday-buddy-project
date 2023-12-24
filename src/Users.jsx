import User from './User'

const Users = (props) => {
   const { allData } = props
   return (
      <div>
         {allData.map((item) => {
            const {id, name, image, age} = item       
            return (
               <User key={id} name={name} image={image} age={age} />
            )
         })}
      </div>
   )
}

export default Users;
