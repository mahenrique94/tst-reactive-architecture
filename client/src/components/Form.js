import React from 'react'
import { FormGroup, Label, Row, Col, Button, Input, FormFeedback } from 'reactstrap'
import { Formik, Form as FormikForm, Field } from 'formik'

const Form = ({ fields, onSubmit, onCancel, initialValues = {}, errors, cancelEnabled, saveEnabled }) => (
    <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
        <FormikForm className="mt-4">
            {fields.map(f => {
                const error = errors.find(e => e.field === f.name)
                return (
                    <Row key={f.name}>
                        <Col>
                            <FormGroup>
                                <Label>{f.label}</Label>
                                <Field className="form-control" {...f}>
                                    {({ field }) => (
                                        <>
                                            <Input {...field} invalid={!!error} value={field.value || ''} />
                                            <FormFeedback>{error && error.message}</FormFeedback>
                                        </>
                                    )}
                                </Field>
                            </FormGroup>
                        </Col>
                    </Row>
                )
            })}
            <Row>
                <Col>
                    <Button color="primary mr-2" disabled={!saveEnabled}>
                        Save
                    </Button>
                    <Button color="danger" onClick={onCancel} type="button" disabled={!cancelEnabled}>
                        Cancel
                    </Button>
                </Col>
            </Row>
        </FormikForm>
    </Formik>
)

export default Form
