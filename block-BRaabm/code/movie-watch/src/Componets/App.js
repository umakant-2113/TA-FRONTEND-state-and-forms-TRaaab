import AllMovie from "./Allmove"
import Header from "./Header"
import data from "../data.json"

const App=()=>{
    return (
        <>
      
        <Header/>
        <section className="container">     
        <div className="all-movie">
            <AllMovie data={data}/>
        </div>
        </section>
        </>
    )
} 

export default App
