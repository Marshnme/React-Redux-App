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
        <div className="position">

            {/* <div className="ques">
                <p>Are you bored and need something to do?</p>
                <p>Well just click this button and then actually do something!</p>
            </div> */}
            <div className="activity-style-con">
                {props.error && <p>{props.error}</p>}
            <p className="activity-style">{props.goats.activity}</p>
            </div>
            
            <div className="button-style">
            <button onClick={() => props.fetchGoats() }>New Activity</button>
            <p className="smol">click me</p>
        </div>
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