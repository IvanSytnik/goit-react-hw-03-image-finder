import { Component } from "react";
import { toast } from 'react-toastify'
class Searchbar extends Component {
    state ={
        name: ''
    }
    changeInput = e => {
        this.setState({
            name: e.currentTarget.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        if(this.state.name.trim() === '') {
         return   toast.error("Please enter word")
        }
        this.props.onSubmit(this.state.name);
        
      }
    render() {
        
        return(
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                    <span className="button-label">Search</span>
                    </button>

                    <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.name}
                    onChange={this.changeInput}
                    />
                </form>
                </header>
        )
    }
}

export default Searchbar;