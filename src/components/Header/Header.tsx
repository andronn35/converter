import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      <div><NavLink to={'conversion'}><button>Обмен валют</button></NavLink></div>
      <div><NavLink to={'rate'}><button>Курс валют</button></NavLink></div>      
    </div>
  )
}

export default Header; 