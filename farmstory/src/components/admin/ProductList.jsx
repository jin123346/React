

export default function ProductList(){

    return (<>
         <section id="productList">
                <nav>
                    <h3>상품목록</h3>
                </nav>

                <article>

                    <table border="0">
                        <tr>
                            <th><input type="checkbox" name="all"/></th>
                            <th>사진</th>
                            <th>상품번호</th>
                            <th>상품명</th>
                            <th>구분</th>
                            <th>가격</th>
                            <th>재고</th>
                            <th>등록일</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name=""/></td>
                            <td><img src="../images/sample_item1.jpg" className="thumb" alt="샘플1" /></td>
                            <td>1011</td>
                            <td>사과 500g</td>
                            <td>과일</td>
                            <td>4,000원</td>
                            <td>100</td>
                            <td>2023-01-01</td>
                        </tr>
                    </table>

                    <p>
                        <a href="#" className="productDelete">선택삭제</a>
                        <a href="./productRegister.html" className="productRegister">상품등록</a>
                    </p>
                    
                    <p className="paging">
                        <a href="#">&lt;</a>
                        <a href="#" className="on">[1]</a>
                        <a href="#">[2]</a>
                        <a href="#">[3]</a>
                        <a href="#">[4]</a>
                        <a href="#">[5]</a>
                        <a href="#">&gt;</a>
                    </p>

                </article>

                
            </section>
    
    </>);
}