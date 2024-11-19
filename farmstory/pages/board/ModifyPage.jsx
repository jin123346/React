import Modify from "../../src/components/board/Modify";
import DefaultLayout from "../../src/layouts/DefaultLayout";
import SubLayout from "../../src/layouts/SubLayout";


export default  function ModifyPage(){


    return (
        <DefaultLayout>
        <SubLayout>
            <Modify />
        </SubLayout>
        </DefaultLayout>

    );

}