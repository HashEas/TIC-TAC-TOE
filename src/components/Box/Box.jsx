import React from 'react';

const Box = (props) => {
    return (
        <div onClick={() => props.onClickHandler(props.index)} class="card_modified">
            <div class="card-body min-height-width">
            {props.boxVal}
            </div>
        </div>
    );
}
export default Box;