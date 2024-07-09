import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import CSS from "csstype";
import { Label } from 'semantic-ui-react';
import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Cookies from 'js-cookie';

const fw: CSS.Properties = {
    fontWeight: 900,
}

// Retrieve and log the CSRF token
const csrfToken = Cookies.get('XSRF-TOKEN');
const session = Cookies.get('laravel_session');
console.log('CSRF Token:', csrfToken); // Debugging

axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
axios.defaults.withCredentials = true;

export default function AddAdmin({ auth }: PageProps) {
    const [Name, setName] = useState("");
    const [Check, setCheck] = useState(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(e.target.checked);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            name: Name,
            isAdmin: Check,
        };

        await axios.get('http://localhost:8001/sanctum/csrf-cookie',
        {
            withCredentials: true
        }
        );

        try {
            const response = await axios.post('/addAdm', formData, {
                headers: {
                    'XSRF-TOKEN': csrfToken, // Ensure CSRF token is include
                },
                withCredentials: true
            });
            console.log('Form submitted successfully:', response.data);
        } catch (error: any) {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="addAdmin" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <div className="form-group mb-4">
                                <Label htmlFor="admName" className='mb-2 fs-6'>Name</Label><br/>
                                <TextInput id="admName" placeholder='Name' onChange={handleNameChange} value={Name}/>
                            </div>
                            <div className="form-group">
                                <Form.Check 
                                    type="checkbox"
                                    id="default-checkbox"
                                    label="Ich bestätige den User zum Admin zu ernennen"
                                    onChange={handleCheckChange}
                                    checked={Check}
                                />
                            </div>
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
