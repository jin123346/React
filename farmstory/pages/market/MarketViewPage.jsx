import MarketView from "../../src/components/market/MarketView";
import DefaultLayout from "../../src/layouts/DefaultLayout";
import SubLayout from "../../src/layouts/SubLayout";

export default function MarketViewPage(){
    return <>
            <DefaultLayout>
                <SubLayout>
                    <MarketView />
                </SubLayout>
            </DefaultLayout>

    
    </>;
}