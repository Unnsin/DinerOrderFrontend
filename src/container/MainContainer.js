import React, { Component } from 'react'
import baner from '../assets/eatBaner.png'
import './mainContainerStyle.css'
import chose from '../assets/chose.png'
import delivery from '../assets/delivery.png'
import order from '../assets/order.png'
import table from '../assets/table.png'


class MainContainer extends Component {
    render() {
        return (
            <div className="Page-container" >
                <div className="baner-container" >
                    <div className="baner">
                        <img src={baner} alt="baner" />
                        <div> Доставка обедов </div>
                    </div>
                </div>
                <div className="title">
                    <hr style={{ width: '10%' }}  />
                        КАК ЭТО РАБОТАЕТ?
                    <hr style={{ width: '12%' }} />
                </div>
                <div className="card-layout">
                    <div className="card-container">
                        <div className="Card">
                            <div className="green-background">
                                <img src={chose} alt="chose"/>
                                <div>Выбирай</div>
                            </div>
                            <div className="card-text" >100+ разнообразных блюд</div>
                        </div>
                        <div className="Card">
                            <div className="green-background">
                                <img  src={order} alt="order"/>
                                <div>Заказывай</div>
                            </div>
                            <div className="card-text">Через сайт или позвоните нам</div>
                        </div>
                        <div className="Card">
                            <div className="green-background">
                                <img src={delivery} alt="delivery"/>
                                <div>Доставка</div>
                            </div>
                            <div className="card-text">Доставка бесплатная по всему городу Запорожье</div>
                        </div>
                        <div className="Card">
                            <div className="green-background">
                                <img src={table} alt="table" />
                                <div>Накрывай стол</div>
                            </div>
                            <div className="card-text">Необязательно иметь посуду. Мы предоставляем одноразовую</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContainer
