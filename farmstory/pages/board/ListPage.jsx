import List from "../../src/components/board/List";
import DefaultLayout from "../../src/layouts/DefaultLayout";
import SubLayout from "../../src/layouts/SubLayout";


export default function ListPage(){


    return (
        <DefaultLayout>
            <SubLayout>
               <List />
            
            </SubLayout>
        </DefaultLayout>

    );

}