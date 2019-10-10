import React, {useEffect}from "react";
import {connect} from "react-redux";
import {fetchGoats} from "../actions";


const GoatPics = props => {
    console.log(props)

        useEffect(() => {
            props.fetchGoats();
        }, []);


    if(props.isFetching){
        return <h2>Loading...</h2>
    }
    return (
        <>
        <div>
            {props.error && <p>{props.error}</p>}
            {props.goats.activity}
            
        </div>
        <div>
            <button onClick={() => props.fetchGoats() }>new thingyy</button>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        goats: state.goat.goats,
        isFetching: state.goat.isFetching,
        error: state.goat.error
    }
}

export default connect(
    mapStateToProps,
    {fetchGoats}
)(GoatPics)