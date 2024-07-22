import React from 'react';
import {
    useLocalEmployeesQuery,
    useCreateEmployeeMutation,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation,
} from '../generated/graphql'; // Adjust path as needed

const EmployeeManager: React.FC = () => {
    // Query local employees
    const { data } = useLocalEmployeesQuery();

    // Mutations
    const [createEmployee] = useCreateEmployeeMutation();
    const [updateEmployee] = useUpdateEmployeeMutation();
    const [deleteEmployee] = useDeleteEmployeeMutation();

    const handleCreate = () => {
        createEmployee({
            variables: {
                employee: {
                    id: '1',
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    position: 'Developer',
                    department: 'Engineering',
                },
            },
        });
        createEmployee({
            variables: {
                employee: {
                    id: '2',
                    name: 'Ravi',
                    email: 'ravi.doe@example.com',
                    position: 'QA',
                    department: 'Engineering',
                },
            },
        });
    };

    const handleUpdate = () => {
        updateEmployee({
            variables: {
                employee: {
                    id: '1',
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    position: 'Senior Developer',
                    department: 'Engineering',
                },
            },
        });
    };

    const handleDelete = (id: string) => {
        deleteEmployee({
            variables: {
                id: id,
            },
        });
    };

    return (
        <div>
            <button onClick={handleCreate}>Create Employee</button>
            <button onClick={handleUpdate}>Update Employee</button>


            <ul>
                {data?.employees?.map(emp => (
                    <>
                        <li key={emp.id}>
                            {emp.name} - {emp.position}
                            <button onClick={() => handleDelete(emp.id)}>Delete Employee</button>
                        </li>

                    </>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeManager;
