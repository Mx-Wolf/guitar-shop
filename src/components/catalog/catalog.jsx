import "./catalog.scss"
import React, {useState} from 'react';
import Filter from '../filter/filter'
import Guitars from "../guitars/guitars";
import {connect} from 'react-redux'
import {getMinPrice, getMaxPrice, getFiltered} from '../../utils'
import PropTypes from "prop-types";

const Catalog = (props) => {
  const minPrice = getMinPrice(props.guitars)
  const maxPrice = getMaxPrice(props.guitars)  
  const [filter, setFilter] = useState({
    price: {
      min: String(minPrice),
      max: String(maxPrice)
    },
    type: {
      acoustic: false,
      electro: false,
      ukulele: false
    },
    string: {
      four: false,
      six: false,
      seven: false,
      twelve: false,
    }
  })
  const filtredGuitars = getFiltered(props.guitars, filter)
  return (
    <div className="catalog">
      <div className="catalog__container container">
        <div className="catalog__head">
          <h2>Каталог гитар</h2>
          <p>
            Главная  
            <svg width="12" height="7">
              <use xlinkHref="#arrow" />
            </svg>
            Каталог
          </p>
        </div>
        <div className="catalog__body">
          <Filter 
            filter = {filter} 
            setFilter = {setFilter}
            maxPrice = {maxPrice} 
            minPrice = {minPrice}
          />
          <Guitars guitars={filtredGuitars} />
        </div>        
      </div>
    </div>

  )
}


Catalog.propTypes = {
  guitars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      reference:  PropTypes.string.isRequired,
      name:  PropTypes.string.isRequired,
      type:  PropTypes.string.isRequired,
      reviewsCount: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      stringsCount: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image:  PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired
    ).isRequired
  }
  
  const mapStateToProps = (state) => {
    return {
      guitars: state.guitars,
    }
  }
export default connect(mapStateToProps)(Catalog)