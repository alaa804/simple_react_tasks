import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title , showAdd , onAdd }) => {
    return (
        <header className="header">
             <h1 style={ showAdd ? authStyle : NotauthStyle} > {title }</h1>
          <Button
             onClick={onAdd}
             color={showAdd ? 'red' : 'green'}
             text={showAdd ? 'Close' : 'Add'}
            
           />
        </header>
    )
}

const authStyle = {
    color : 'red'
}

const NotauthStyle = {
    color : 'green'
}

Header.defaultProps = {
    title : 'Task Tracker'
}

Header.propTypes = { 
    title : PropTypes.string.isRequired,
   
}

export default Header
