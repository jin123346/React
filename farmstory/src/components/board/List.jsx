import { Link, useSearchParams } from 'react-router-dom';
import UseCates from '../../hooks/UseCates';
import { useEffect, useState } from 'react';
import { getArticle } from '../../api/ArticleAPI';
import useAuth from '../../hooks/UseAuth';
import Pagenation from './Pagenation';

const initState ={
    dtoList: [],
    cate: "",
    pg: 1,
    size: 10,
    total: 0,
    startNo: 0,
    start: 0,
    end: 0,
    prev: false,
    next: false,
    type: null,
    keyword: null,
  };



export default function List(){
    const [cate1, cate2, board ] = UseCates();
    console.log("cate2 : "+cate2);

    const {username, accessToken, role, navigate} = useAuth();
    const [articles, setArticles] = useState([]); // Article 데이터 상태
    const [data,setData] = useState(initState);

    const [searchParms] = useSearchParams();
    const pg = searchParms.get("pg") || 1;



    useEffect(() => {
        
        const fetchData = async () => {
            if (!cate2) {
                console.warn("cate2 is undefined");
                return;
            }
            try {
                const data = await getArticle(cate2 ,pg); // API 호출
                console.log("datA!!!",data);
                setArticles(data.dtoList || []); // 데이터 설정
                setData(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cate2,pg]); // accessToken이 변경될 때만 실행
    return<>
        <section className="list">
                        <nav>                            
                            <form action="#">
                                <input type="text" name="search" placeholder="제목 키워드, 글쓴이 검색"/>
                                <input type="submit" value="검색"/>
                            </form>
                        </nav>
                             
                        <h1>글목록</h1>
                        <table border="0">                    
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>글쓴이</th>
                                <th>날짜</th>
                                <th>조회</th>
                            </tr>   
                            {articles && articles.length > 0 ? (
                                articles.map((article, index) => (
                                    <tr key={article.no}>
                                        <td>{data.startNo - index}</td>
                                        <td><Link to={`/board/view?no=${article.no}`}>{article.title}</Link></td>
                                        <td>{article.writer}</td>
                                        <td>{article.regDate}</td>
                                        <td>{article.hit}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">게시물이 없습니다.</td>
                                </tr>
                            )}
                        </table>
        
                        <Pagenation data={data} cate1={cate1} cate2={cate2} />
        
                        <Link to={`/board/write?cate1=${cate1}&cate2=${cate2}`} className="btn btnWrite">글쓰기</Link>                        
                    </section>
    
    </>;
}