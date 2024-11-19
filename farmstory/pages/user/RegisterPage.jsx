import Register from "../../src/components/user/Register";
import DefaultLayout from "../../src/layouts/DefaultLayout";

export default function RegisterPage() {
    return <>
    <DefaultLayout>
        <div id="user">
            <Register />
        </div>

    </DefaultLayout>
       
    
</>;
}