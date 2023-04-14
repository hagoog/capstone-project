import "./FoodCardStyles.css"
import React from 'react'
import { Link } from 'react-router-dom'
import greekSalad from "../Assets/Images/greek salad.jpg"
import { MdDeliveryDining } from "react-icons/md";
import FoodCardData from "../Components/FoodCardData"


const FoodCard = (props) => {
  return (
    <section className="bottom">
    <article className="food-card">
        <img src={props.imgsrc} />
        <div className="bottom-food">
        <div className="food-price">
            <h3>{props.title}</h3>
            <h4>{props.price}</h4>
        </div>
        <div className="food-description">
            <p>{props.description}</p>
        </div>
        <div className="food-order">
            <h3>Order Delivery</h3>
            <MdDeliveryDining size={30} />
        </div>
        </div>
    </article>
</section>
  )
}

export default FoodCard