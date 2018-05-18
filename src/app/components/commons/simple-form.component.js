import React, { Children } from 'react';

export class SimpleFormComponent extends React.PureComponent {
    render() {
        const { handleSubmit, children, validateLabel = 'Submit' } = this.props;
        return (
            <form onSubmit={ handleSubmit } className="form">
                {
                    Children.map(children, (field) => {
                        return field || null;
                    })
                }

                <div className="field">
                    <div className="control">
                        <button className="button">{ validateLabel }</button>
                    </div>
                </div>

            </form>
        );
    }
}
