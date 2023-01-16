import '../styles.css'
import PropTypes from 'prop-types';
const Button = ({onClick}) => {
    return(
    <div className='container-btn'>
        <button className='Button' onClick={onClick} type="button">Load more</button>
    </div>
    )
}
Button.propTypes = {
    onClick: PropTypes.elementType.isRequired,
    
   }
export default Button;