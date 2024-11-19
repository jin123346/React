
import Login from "../../src/components/user/Login";
import DefaultLayout from "../../src/layouts/DefaultLayout";

export default function LoginPage() {
    return <>
        <DefaultLayout>
            <div id="user">
                <Login />
            </div>

        </DefaultLayout>
           
        
    </>;
}