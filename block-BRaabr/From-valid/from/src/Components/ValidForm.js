import React from "react"

class validForm extends React.Component{
constructor(){
    super()
    this.state={

    }
}
    render(){
        return (
            <>
            <h1 className="h1">Valid Form  </h1>
            <form>
                <div className="form-div">
                <input type="text" placeholder="Enter Name"name="username"  />
                <input type="date" name="date" />
                <input type="file" />
                <input type="text" value="This is read Only Tag"    readOnly />
                <input type="text" value="Disable this input"   disabled />
                <textarea name="" id="" cols="20" rows="8"  placeholder="Enter Text" ></textarea>
                <textarea name="" id="" cols="20" rows="8"  value="Disable this Teaxtarea"  disabled></textarea>
                <input type="submit" />
                </div>
            </form>
            </>
        )
    }
}

export default validForm;

