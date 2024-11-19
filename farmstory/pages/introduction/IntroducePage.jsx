import Direction from "../../src/components/introduction/Direction";
import DefaultLayout from "../../src/layouts/DefaultLayout";

export default function IntroducePage(){
    return <>
            <DefaultLayout>
                <div id="sub">
                    <Direction />
                </div>
            </DefaultLayout>

    
    </>;
}