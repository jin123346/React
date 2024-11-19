import Write from "../../src/components/board/Write";
import DefaultLayout from "../../src/layouts/DefaultLayout";
import SubLayout from "../../src/layouts/SubLayout";


export default function WritePage(){


    return (
        <DefaultLayout>
        <SubLayout>
            <Write/>
        </SubLayout>
    </DefaultLayout>

    );

}