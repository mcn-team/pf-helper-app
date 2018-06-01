import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
// import { push } from 'react-router-redux'

import { SimpleForm } from '../../commons/simple-form.component';
import { FieldSelect } from '../../commons/field-select.component';
import { GamesREST } from '../../../utils/rest/games-rest.utils';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 5;

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            games: []
        }
    }

    async componentDidMount() {
        const response = await GamesREST.list({ page: DEFAULT_PAGE, limit: DEFAULT_LIMIT });

        this.setState(() => {
            return { games: response };
        });
    }

    handleValidate(values) {
        console.log(values);
    }

    render() {
        const { games } = this.state;
        return (
            <div>
                <SimpleForm isCentered onSubmit={ this.handleValidate.bind(this) } validateLabel="Valider">
                    <FieldSelect label="Selectionnez une partie..." name="game" choices={ games } />
                </SimpleForm>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         changePage: () => push('/about-us')
//     }, dispatch);
// };

export const Home = connect(
    null,
    null
)(HomePage);
