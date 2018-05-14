import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const Home = (props) => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome home!</p>
            <button onClick={() => props.changePage()}>Go to about page via redux</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changePage: () => push('/about-us')
    }, dispatch);
};

export default connect(
    null,
    mapDispatchToProps
)(Home);
