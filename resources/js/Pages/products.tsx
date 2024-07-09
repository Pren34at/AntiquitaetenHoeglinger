import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import CSS from "csstype";
import ReactIf from '@/Components/ReactIf';
import axios from 'axios';
export default function Dashboard({auth}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
        >   


        </AuthenticatedLayout>
    );
}