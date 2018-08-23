import React, { Component } from 'react';
import './style.scss';
import Arrow from 'components/Arrow';
import { connect } from 'react-formutil';

@connect
class Keywords extends Component {
    render() {
        const { dataSource } = this.props;

        return (
            <div className="swiper-slide cars">
                <header>
                    <span className="logo" />
                    <p className="question">你最难忘的东风日产车型是哪辆？</p>
                </header>
                <ul className="cars-box">
                    {dataSource.map((item, index) => (
                        <li className="car" key={index}>
                            <img className="car-img" src={item.img} alt="car" />
                            <label className="car-label">
                                <input type="radio" name="car" value={item.id} />
                                {item.label}
                            </label>
                        </li>
                    ))}
                </ul>
                <Arrow />
            </div>
        );
    }
}

export default Keywords;
