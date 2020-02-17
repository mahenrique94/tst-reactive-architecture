import React, { useEffect } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Swal from 'sweetalert2'

import App from '../containers/App'
import Form from '../fragments/home/Form'
import Table from '../fragments/home/Table'

const Home = ({ dispatchSave, dispatchCancel, dispatchEdit, dispatchRemove, obj, list, errors, loading, dispatchList }) => {
    const fields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'age', label: 'Age', type: 'number' },
    ]

    useEffect(() => {
        dispatchList()
    }, [])

    const handleFormSubmit = (values, { resetForm }) => {
        dispatchSave(values)
        resetForm()
    }

    const handleFormCancel = () => dispatchCancel()

    const handleEdit = patient => dispatchEdit(patient.patient_id)

    const handleRemove = patient => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00cc99',
            cancelButtonColor: '#ff8080',
            confirmButtonText: 'Yes, remove it!',
        }).then(result => {
            if (result.value) {
                dispatchRemove(patient)
            }
        })
    }

    return (
        <App>
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Patient</BreadcrumbItem>
            </Breadcrumb>
            <Form
                fields={fields}
                onSubmit={handleFormSubmit}
                onCancel={handleFormCancel}
                initialValues={obj}
                errors={errors}
                cancelEnabled={loading}
                saveEnabled={!loading}
            />
            <Table
                data={list}
                columns={['name', 'age', 'actions']}
                loading={loading}
                handleEdit={handleEdit}
                handleRemove={handleRemove}
            />
        </App>
    )
}

export default Home
