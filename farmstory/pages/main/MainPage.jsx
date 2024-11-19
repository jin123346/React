import Best from "../../src/components/main/Best";
import Info from "../../src/components/main/Info";
import Latest from "../../src/components/main/Latest";
import Quick from "../../src/components/main/Quick";
import Slider from "../../src/components/main/Slider";
import DefaultLayout from "../../src/layouts/DefaultLayout";

export default function MainPage(){

    return (
        <DefaultLayout>
            <main>
                <Slider />   
                <Best />
                <Quick />
                <Latest />
                <Info />
            </main>
              
        </DefaultLayout>
    );
}