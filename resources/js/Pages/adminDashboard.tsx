import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import CSS from "csstype";
import ReactIf from '@/Components/ReactIf';

const fw: CSS.Properties = {
    fontWeight: 900, 
}

export default function adminDashboard({ auth}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900" style={fw}>View Statistics</div>
                        <div className ="p-6 text-gray-900">View Orders</div>
                        <button className ="p-6 text-gray-900"><a href="/addAdmin">add Admin</a></button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
