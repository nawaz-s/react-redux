import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>Items -{props.items}</h2>
            <button onClick={props.buyItem}>Buy {props.cake ? 'Cake' : 'Ice Cream'}</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemCount = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;

    return {
        items: itemCount,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream());

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)