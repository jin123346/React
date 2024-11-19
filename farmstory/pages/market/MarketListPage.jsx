import MarketList from "../../src/components/market/MarketList";
import DefaultLayout from "../../src/layouts/DefaultLayout";
import SubLayout from "../../src/layouts/SubLayout";

export default function MarketListPage(){
    return <>
            <DefaultLayout>
                <SubLayout>
                    <MarketList />
                </SubLayout>
            </DefaultLayout>

    
    </>;
}