import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const UseCates  = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const [cate1, setCate1] = useState(null);
    const [cate2, setCate2] = useState(null);
    const [board, setBoard] = useState(null);

    useEffect(() => {
        const pathValues = location.pathname.split("/");
        let tempCate1 = pathValues[1];
        let tempCate2 = pathValues[2];

        if (tempCate1 === "board") {
            tempCate1 = searchParams.get("cate1");
            tempCate2 = searchParams.get("cate2");
            setBoard("board");
        }

        setCate1(tempCate1);
        setCate2(tempCate2);
    }, [location, searchParams]); // URL이나 쿼리 파라미터가 변경될 때 실행

    return [cate1, cate2, board];
};

export default UseCates;