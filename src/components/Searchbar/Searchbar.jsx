import { Component } from "react";
import { toast } from 'react-toastify'
import {BsSearch} from "react-icons/bs";
import PropTypes from 'prop-types';
import '../styles.css'
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
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                    <span className="button-label"> <BsSearch/></span>
                    </button>

                    <input
                    className="SearchForm-input"
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

Searchbar.propTypes = {
    onSubmit: PropTypes.elementType.isRequired,
    
   }
export default Searchbar;