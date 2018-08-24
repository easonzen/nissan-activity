import React, { Component } from 'react';
import './style.scss';
import Arrow from 'components/Arrow';

class Keywords extends Component {
    render() {
        const { dataSource, showTitle, FieldProps } = this.props;

        return (
            <div className="swiper-slide cars">
                <header style={{ visibility: showTitle ? 'initial' : 'hidden' }}>
                    <span className="logo" />
                    <p className="question">你最难忘的东风日产车型是哪辆？</p>
                </header>
                <ul className="cars-box">
                    {dataSource.map((item, index) => (
                        <li className="car" key={index}>
                            <img className="car-img" src={item.img} alt="car" />
                            <label htmlFor={item.label} className="label-container">
                                <div className="radio-container">
                                    <input
                                        id={item.label}
                                        type="radio"
                                        name={FieldProps.$name}
                                        onChange={ev => FieldProps.$render({ value: item.value, label: item.label })}
                                    />
                                    <label htmlFor={item.label} className="car-label" />
                                </div>
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
