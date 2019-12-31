import React from 'react';
import { Field } from 'redux-form';

export class FieldSelect extends React.PureComponent {
    render() {
        const { label, name, choices, isCentered = false } = this.props;
        return (
            <div className="field">
                <div className={ `control ${ isCentered ? 'has-text-centered' : '' }` }>
                    <label className="label">{ label }</label>
                    <div className="select">
                        <Field className="input" name={ name } component="select">
                            <option />
                            {
                                choices && choices.map((choice, index) => {
                                    return choice
                                        ? <option key={ index } value={ choice.id }>{ choice.title }</option>
                                        : null;
                                })
                            }
                        </Field>
                    </div>
                </div>
            </div>
        );
    }
}
