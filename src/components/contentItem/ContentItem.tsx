import React, {useState, FC, useEffect} from 'react';

import pizza from '../../assets/locale/pizza.svg';
import {PizzaType} from '../../ts/types/types';
import {
    BIG_PIZZA,
    CURRENCY,
    MIDDLE_PIZZA,
    SMALL_PIZZA,
    THIN,
    TRADITIONAL,
    UNIT_OF_MEASUREMENT,
} from '../../constants/constants';

import {Button} from '../../../src/components/button/Button';
import './ContentItem.scss';

export const ContentItem: FC<PizzaType> = ({
     id,
     image,
     name,
     dough,
     size,
     available,
     price,
 }) => {

  const [parameters, setParameters] = useState({
    id,
    image,
    name,
    dough,
    size,
    available,
    price
  });

    const pizzaTypes = [THIN, TRADITIONAL];
    const pizzaSizes = [SMALL_PIZZA, MIDDLE_PIZZA, BIG_PIZZA];

    useEffect(() => {
      console.log(parameters, 'parameters')
    },[parameters])

    const changeParameter = (type ,  isTypeAvailable, pizzaType): void => {
      setParameters({ ...parameters, dough: pizzaType })
    }

    const pizzaType = () => {
      return pizzaTypes.map((pizzaType, index) => {
        const idIndex = `radio-${index + 1}`
        const isItemCheck = pizzaType === dough
        const isTypeAvailable = !!available.find((el) => el === pizzaType)
        const containerStyle = isItemCheck ? 'form-radio-group-item-checked' : !isTypeAvailable ? 'form-radio-group-item-unavailable' : 'form-radio-group-item';

        return (
            <div className={containerStyle} key={pizzaType} onClick={() => changeParameter('dough' ,isTypeAvailable, pizzaType )}>
              <input
                  id={idIndex}
                  type="radio"
                  name="dough"
                  value="1"
              />
              <label htmlFor={idIndex}>
                {pizzaType}
              </label>
            </div>
        )
      })
    }


    const pizzaSize = () => {
        return pizzaSizes.map((pizzaSize, index) => {
          const idIndex = `radio-${index + 1}`
          const isItemCheck = pizzaSize === size
          const isSizeAvailable = !!available.find((el) => +el === pizzaSize)
          const containerStyle = isItemCheck ? 'form-radio-group-item-checked' : !isSizeAvailable ? 'form-radio-group-item-unavailable' : 'form-radio-group-item';

            return (
                <div className={containerStyle} key={pizzaSize} onClick={() => console.log('Size click!')} >
                    <input id={idIndex} type="radio" name="radio" value={size}  disabled={!isSizeAvailable}  />
                    <label htmlFor={idIndex} className="unit-of-measurement">
                        {pizzaSize} {UNIT_OF_MEASUREMENT}
                    </label>
                </div>
            )
        })
    }

    return (
        <article className="content-item-container">
            <img className="pizza" alt="Pizza" src={image}/>
            <h3 className="item-name">{name}</h3>

            <div className="toggle-set">
                <div className="form-radio-group">
                    {/*<div className="form-radio-group-item">*/}

                    {/*<div*/}
                    {/*    className={*/}
                    {/*        dough === 'тонкое'*/}
                    {/*            ? 'form-radio-group-item-checked'*/}
                    {/*            : 'form-radio-group-item'*/}
                    {/*    }*/}
                    {/*>*/}
                    {/*    <input*/}
                    {/*        id="radio-1"*/}
                    {/*        type="radio"*/}
                    {/*        name="dough"*/}
                    {/*        value="1"*/}
                    {/*        checked={dough === 'тонкое'}*/}
                    {/*    />*/}
                    {/*    <label*/}
                    {/*        className={*/}
                    {/*            dough === 'тонкое'*/}
                    {/*                ? 'form-radio-group-label-checked'*/}
                    {/*                : 'form-radio-group-label'*/}
                    {/*        }*/}
                    {/*        htmlFor="radio-1"*/}
                    {/*    >*/}
                    {/*        {THIN}*/}
                    {/*    </label>*/}
                    {/*</div>*/}

                {/*    <div*/}
                {/*        className={*/}
                {/*            dough === 'традиционное'*/}
                {/*                ? 'form-radio-group-item-checked'*/}
                {/*                : 'form-radio-group-item'*/}
                {/*        }*/}
                {/*    >*/}
                {/*        <input*/}
                {/*            id="radio-2"*/}
                {/*            type="radio"*/}
                {/*            name="dough"*/}
                {/*            value="2"*/}
                {/*            checked={dough === 'традиционное'}*/}
                {/*        />*/}
                {/*        <label*/}
                {/*            className={*/}
                {/*                dough === 'традиционное'*/}
                {/*                    ? 'form-radio-group-label-checked'*/}
                {/*                    : 'form-radio-group-label'*/}
                {/*            }*/}
                {/*            htmlFor="radio-2"*/}
                {/*        >*/}
                {/*            {TRADITIONAL}*/}
                {/*        </label>*/}
                {/*    </div>*/}
                {/*</div>*/}

                  {pizzaType()}

                </div>
                <div className="form-radio-group">
                    {/*<div className="form-radio-group-item">*/}
                    {/*    <input id="radio-3" type="radio" name="radio" value="3" checked/>*/}
                    {/*    <label htmlFor="radio-3" className="unit-of-measurement">*/}
                    {/*        {SMALL_PIZZA} {UNIT_OF_MEASUREMENT}*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                    {/*<div className="form-radio-group-item">*/}
                    {/*    <input id="radio-4" type="radio" name="radio" value="4"/>*/}
                    {/*    <label htmlFor="radio-4">*/}
                    {/*        {MIDDLE_PIZZA} {UNIT_OF_MEASUREMENT}*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                    {/*<div className="form-radio-group-item">*/}
                    {/*    <input id="radio-5" type="radio" name="radio" value="5"/>*/}
                    {/*    <label htmlFor="radio-5">*/}
                    {/*        {BIG_PIZZA} {UNIT_OF_MEASUREMENT}*/}
                    {/*    </label>*/}
                    {/*</div>*/}

                  {pizzaSize()}
                </div>
            </div>

            <div className="price-container">
                <p className="price">
                    от {price}
                    {CURRENCY}
                </p>
                <Button type={'added'}/>
            </div>
        </article>
    );
};
