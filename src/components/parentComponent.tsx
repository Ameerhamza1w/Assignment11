import ChildComponent from "./ChildComponents"

const ParentComponent = () => {
 let fullname = "Ameer Hamza Memon"
   let favoriteColor = "Black"
   let favoriteDish= "Biryani"


    return (
        <div>
 <ChildComponent 
name={fullname} 
color={favoriteColor}
dish={favoriteDish}
 />
        </div>
    )
}

export default ParentComponent