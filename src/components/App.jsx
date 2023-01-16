import React,{Component} from "react";
import { Hearts  } from 'react-loader-spinner'
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
const keyApi = '26520877-3fd7b67c65e333110b622b89f';

class ImageFinder extends Component {
    state = {
      name: null,
      data: [],
      isLoading: false,
      isError: false,
      page: 1,
      button: false
    }

    handleFormSubmit= submitName => {
      this.setState({
        name: submitName,
        page: 1
      })
    }
  
  async componentDidUpdate(prevProps, prevState) {
    if(prevState.name !== this.state.name) {
      console.log(this.state.name)
      this.setState({isLoading: true})
      // fetch(`https://pixabay.com/api/?q=${this.state.name}&page=1&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`)
      // .then( response => {
      //   if(response.ok){
      //     return response.json()
      //   }
      //   return Promise.reject(
      //     new Error(`No photo with ${this.state.name}`)
      //   )
      // } )
      // .then( data => this.setState({data: data.hits}))
      // .catch(error => this.setState({error}))
      // .finally(()=> this.setState({isLoading: false}));
      try{
        
        const {data} = await axios.get(`https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`)
        console.log(data)
        if(data.total === 0) {
          return toast.error(`No photo with ${this.state.name}`)
        }
        else {
          this.setState({
            data: data.hits,
            button: true, 
            page: 2
          })
        }
       
        
        
      } catch(error) {
        this.setState({
          isError: true
        })
      } finally{
        this.setState({isLoading: false,})
      }
    }
     
   }
   fetchData = async () => {
    this.setState({isLoading: true})
    try{
      
      const {data} = await axios.get(`https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`)
      console.log(data)
      this.setState((update) =>({
        data: [...update.data, ...data.hits]
      }))
      if(this.state.page*12 >= data.total) {
        this.setState({button: false})
        return toast.error(`No more photo`)
      }
     
      } catch(error) {
        this.setState({
          isError: true
        })
      } finally{
        this.setState({isLoading: false})
        this.setState((update) => (
          {
            page: update.page + 1
          }
        ))
    }
  }
    render() {
     
      return(
        <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar> 
        {this.state.data.length > 0 && (<ImageGallery items={this.state.data}/>)}
        
        <ToastContainer autoClose={3000}/>
        {this.state.isLoading && (<Hearts color="red"/>)}
        {this.state.button && (<Button onClick={this.fetchData}/>)}
        </>
      )
    }
}

export const App = () => {
  return (
   <ImageFinder/>
  );
};
