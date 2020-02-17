import React from 'react'
import { Table as BSTable, Spinner, Button } from 'reactstrap'

const Table = ({ data, columns, loading, handleEdit, handleRemove }) => (
    <BSTable className="mt-3" striped hover>
        <thead>
            <tr>
                {columns.map(column => (
                    <th key={column}>{column}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {loading ? (
                <tr>
                    <td align="center" colSpan={columns.length}>
                        <Spinner color="primary" />
                    </td>
                </tr>
            ) : data.length ? (
                data.map((item, index) => (
                    <tr key={index}>
                        {columns.map(column => {
                            if (column === 'actions') {
                                return (
                                    <td key={column}>
                                        {handleEdit && (
                                            <Button color="warning" onClick={() => handleEdit(item)}>
                                                E
                                            </Button>
                                        )}
                                        {handleRemove && (
                                            <Button className="ml-2" color="danger" onClick={() => handleRemove(item)}>
                                                R
                                            </Button>
                                        )}
                                    </td>
                                )
                            }
                            return <td key={item[column]}>{item[column]}</td>
                        })}
                    </tr>
                ))
            ) : (
                <tr>
                    <td align="center" colSpan={columns.length}>
                        Table empty
                    </td>
                </tr>
            )}
        </tbody>
    </BSTable>
)

export default Table
