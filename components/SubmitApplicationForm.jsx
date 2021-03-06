import React, {Component, PropTypes} from 'react';

import mui, {
    TextField,
    SelectField,
    RaisedButton,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
    Divider
} from 'material-ui';

import { humanizeFieldName } from '../src/helpers';

class SubmitApplicationForm extends Component {
    constructor (props, context) {
        super(props, context);
    }

    submit () {}

    render () {

        const fieldNames = [
            "firstName",
            "lastName",
            "phone",
            "email",
            "streetAddress",
            "streetAddressCont",
            "city",
            "state",
            "zipCode",
            "coverage",
            "socialSecurityNumber"
        ];
        let rows = [];
        for (let fieldName of fieldNames) {
            let fieldTitle = humanizeFieldName(fieldName);
            let fieldValue = this.props.fieldValues[fieldName];
            if (!!fieldValue) {
                rows.push(
                    <TableRow>
                        <TableRowColumn>{fieldTitle}</TableRowColumn>
                        <TableRowColumn>{fieldValue}</TableRowColumn>
                    </TableRow>
                );
            }
        }
        return (
            <div style={this.props.containerStyle}>
                <Paper style={this.props.paperStyle}>

                    <h3>Confirm application details</h3>
                    <Divider/>
                    <Table>
                        <TableBody displayRowCheckbox={false}>
                            {rows}
                        </TableBody>
                    </Table>
                </Paper>
                <RaisedButton className="prev" label="Back" secondary={true} onClick={this.props.prevStep} style={this.props.prevButtonStyle}/>
                <RaisedButton className="next" label="Submit" secondary={true} onClick={this.props.submit} style={this.props.nextButtonStyle}/>
            </div>
        );
    }
}




export default SubmitApplicationForm;
