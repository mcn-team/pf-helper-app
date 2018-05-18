import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux'
// import { push } from 'react-router-redux'

import { SimpleFormComponent } from '../../commons/simple-form.component';

import { GamesREST } from '../../../utils/rest/games-rest.utils';

const listFieldContainerStyle = { border: '1px solid #ddd' };
const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 5;

export class Home extends React.PureComponent {
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

    //TODO: Extract the list container into a component
    //TODO: Extract the element into a component
    render() {
        const { games } = this.state;
        return (
            <div>
                <SimpleFormComponent validateLabel="Valider">
                    <div className="field">
                        <div className="control">
                            <label className="label">Sélectionnez une partie</label>
                            <div style={ listFieldContainerStyle }>
                                {
                                    games.map((game, index) => {
                                        return (
                                            <p key={ index }>{ game.title }</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </SimpleFormComponent>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         changePage: () => push('/about-us')
//     }, dispatch);
// };

// export default connect(
//     null,
//     mapDispatchToProps
// )(Home);
