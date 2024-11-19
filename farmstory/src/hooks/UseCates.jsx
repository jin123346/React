import { useLocation, useSearchParams } from "react-router-dom";

const UseCates  = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const pathValues = location.pathname.split("/");

    let cate1=pathValues[1];
    let cate2=pathValues[2];
    let board = null;
    if(cate1 ==="board"){
        cate1 = searchParams.get("cate1");
        cate2 = searchParams.get("cate2");
        board = "board"; // board 값을 설정
    }

    return [cate1, cate2, board ];
};

export default UseCates;