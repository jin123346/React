import Hello from "../../src/components/introduction/Hello";
import DefaultLayout from "../../src/layouts/DefaultLayout";
import SubLayout from "../../src/layouts/SubLayout";

export default function HelloPage(){
    return <>
            <DefaultLayout>
                <SubLayout>
                    <Hello />

                </SubLayout>
            </DefaultLayout>

    
    </>;
}