import React from "react";


type args = {
    price: number
}

export const Button = (props: args) => {
    return (
        <article>
            <button className='button'>{props.price}</button>
        </article>
    )
}