import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Button from '../Components/Button';
import SocialButton from '../Components/SocialButton'
import CSS from "csstype";

export default function Orders({auth}: PageProps) {
    return (
        <AuthenticatedLayout
        user = {auth.user}
        header = {<h2 className="font-semibold text-xl text-gray-800 leading-tight">Orders</h2>}
        >
                <form action='Orders/{$product_id}' method='POST'>
                        <div className="form-group">
                             <input type="text" className="form-control" name="name" placeholder="Add name..."/>
                             <Button href='Orders/{Auth::id()}' children="Order"></Button>
                        </div>
            </form>
        </AuthenticatedLayout>
    )
}