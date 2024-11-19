import View from "../../src/components/board/View";
import DefaultLayout from "../../src/layouts/DefaultLayout";
import SubLayout from "../../src/layouts/SubLayout";


export default function ViewPage(){


    return (
        <DefaultLayout>
        <SubLayout>
            <View />
        </SubLayout>
    </DefaultLayout>

        
    );

}