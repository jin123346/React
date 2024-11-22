import {Link, useNavigate} from "react-router-dom";
import useCates from "../../hooks/UseCates";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/UseAuth";
import { useEffect, useState } from "react";
import { postArticle } from "../../api/ArticleAPI";

export default function Write(){

    const [cate1,cate2,board] = useCates();
    console.log("cate!!!")
    console.log("cate2:", cate2); // cate2 값 확인

    const { username, accessToken, role, navigate } = useAuth();

    const[article,setArticle] =  useState({
            cate1: "",
            cate2: "",
            title:"",
            contents:"",
            writer: username,
          
        });

    useEffect(() => {
        if (!username) {
            alert("로그인을 하셔야 합니다.");
            navigate("/user/login");
        }
    }, [username, navigate]);

    const changeHandler = (e) => {
        e.preventDefault();

        setArticle({...article,[e.target.name]:e.target.value});
        setArticle((prev)=> ({
            ...prev,
            cate1: cate1 || "",
            cate2: cate2 || "",
        }));
        console.log("article",article);
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("article",article)

        const result = await postArticle(article,accessToken);

        if(result){
            alert('글 작성이 완료되었습니다.');
            navigate(`/board/list?cate1=${cate1}&cate2=${cate2}`);
        }

       
    }

    

    return<>
         <section className="write">
            <h1>글쓰기</h1>
            <form onSubmit={submitHandler}>                            
                <table border="0">
                    <tbody>
                    <tr>
                        <th>제목</th>
                        <td><input type="text" name="title" placeholder="제목을 입력하세요." value={article.title} onChange={changeHandler}/></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea name="contents" value={article.contents} onChange={changeHandler}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>파일</th>
                        <td>
                            <p>
                                최대 2개 파일 첨부 가능, 각 파일당 최대 10MB까지 가능
                            </p>
                            <input type="file" name="file1"/>
                            <input type="file" name="file2"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                
                <div>
                    <a href="./list.html" className="btn btnCancel">취소</a>
                    <input type="submit" value="작성완료" className="btn btnComplete"/>
                </div>
            </form>        
        </section>
    
    </>;
}