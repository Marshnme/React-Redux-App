import React, {useEffect}from "react";
import {connect} from "react-redux";
import {fetchGoats} from "../actions";
import {Pics} from "./Pics";

const GoatPics = props => {
    console.log(props)

        useEffect(() => {
            fetchGoats();
        }, []);


    if(props.isFetching){
        return <h2>Loading Goat for u</h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
        </div>
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
    {}
)(GoatPics)