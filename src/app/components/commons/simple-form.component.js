import React, { Children } from 'react';
import { reduxForm } from 'redux-form';

class SimpleFormComponent extends React.PureComponent {
    render() {
        const { handleSubmit, children, validateLabel = 'Submit', isCentered = false } = this.props;
        return (
            <form onSubmit={ handleSubmit } className="form">
                {
                    Children.map(children, (field) => {
                        return React.cloneElement(field, { ...field.props, isCentered });
                        // return field || null;
                    })
                }

                <div className="field">
                    <div className={ `control ${isCentered ? 'has-text-centered' : ''}` }>
                        <button type="submit" className="button">{ validateLabel }</button>
                    </div>
                </div>

            </form>
        );
    }
}

export const SimpleForm = reduxForm({
    form: 'simpleForm',
})(SimpleFormComponent);
