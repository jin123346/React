

import { useEffect, useRef, useState } from "react";
import { postProduct } from "../../api/ProductAPI";
import useAuth from "../../hooks/UseAuth";



export default function Register(){

 const {username,accessToken,role,navigate} = useAuth();

    //리액트 
    const thumb120Ref = useRef(null);
    const thumb240Ref = useRef(null);
    const thumb750Ref = useRef(null);
    const formData = new FormData();

  

    const [product,setProduct] =  useState({
                productName : "",
                type : "",
                price : "",
                point : "",
                discount : "",
                delivery : "",
                stock : "",
                etc : "",
            })

    useEffect(()=>{});

    const changeHandler = (e) => {
        e.preventDefault();

        setProduct({...product,[e.target.name]:e.target.value});
    
        console.log("product",product);
    }


    const submitHandler = async (e) => {
        e.preventDefault();

          // 파일 데이터 추가
        if (thumb120Ref.current?.files[0]) {
            formData.append("thumbFile120", thumb120Ref.current.files[0]);
        }
        if (thumb240Ref.current?.files[0]) {
            formData.append("thumbFile240", thumb240Ref.current.files[0]);
        }
        if (thumb750Ref.current?.files[0]) {
            formData.append("thumbFile750", thumb750Ref.current.files[0]);
        }
        for (const key in product) {
            formData.append(key, product[key]);
        }

        console.log("formdata",...formData.entries());
       const result = await postProduct(formData,accessToken);

       if(result.pno){
        alert('상품 등록 되었습니다.');
        navigate('/admin/product/list');
       }else{
        alert('상품 등록에 실패했습니다.')
       }
       

       
    }

    return (<>
        <section id="productRegister">
                <nav>
                    <h3>상품등록</h3>
                </nav>

                <article>
                    <form onSubmit={submitHandler} method="post">
                        <table border="0">
                            <tr>
                                <td>상품명</td>
                                <td><input type="text" name="productName" value={product.productName} onChange={changeHandler}/></td>
                            </tr>
                            <tr>
                                <td>종류</td>
                                <td>
                                    <select name="type" onChange={changeHandler}>
                                        <option>종류</option>
                                        <option>과일</option>
                                        <option>야채</option>
                                        <option>곡류</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>가격</td>
                                <td><input type="text" name="price" value={product.price} onChange={changeHandler}/></td>
                            </tr>
                            <tr>
                                <td>포인트</td>
                                <td>
                                    <input type="text" name="point" value={product.point}  onChange={changeHandler}/>
                                    포인트는 가격의 1%
                                </td>
                            </tr>
                            <tr>
                                <td>할인</td>
                                <td>
                                    <select name="discount" onChange={changeHandler}>
                                        <option value="5">5%</option>
                                        <option value="12">12%</option>
                                        <option value="15">15%</option>
                                        <option value="18">18%</option>
                                        <option value="20">20%</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>배송비</td>
                                <td>
                                    <label><input type="radio" name="delivery" value="2000" onChange={changeHandler}/>2,000원</label>                                    
                                    <label><input type="radio" name="delivery" value="3000" onChange={changeHandler}/>3,000원</label>
                                    <label><input type="radio" name="delivery" value="5000" onChange={changeHandler}/>5,000원</label>
                                    <label><input type="radio" name="delivery" value="0" onChange={changeHandler}/>무료</label>
                                </td>
                            </tr>
                            <tr>
                                <td>재고</td>
                                <td><input type="text" name="stock" value={product.stock} onChange={changeHandler}/></td>
                            </tr>
                            <tr>
                                <td>상품이미지</td>
                                <td>
                                    <p>
                                        <span>상품목록 이미지(약 120 x 120)</span>
                                        <input type="file" name="thumb120" ref={thumb120Ref}/>
                                    </p>
                                    <p>
                                        <span>기본정보 이미지(약 240 x 240)</span>
                                        <input type="file" name="thumb240" ref={thumb240Ref}/>
                                    </p>
                                    <p>
                                        <span>상품설명 이미지(약 750 x Auto)</span>
                                        <input type="file" name="thumb750" ref={thumb750Ref}/>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td>
                                    <textarea name="etc" value={product.etc} onChange={changeHandler}></textarea>
                                </td>
                            </tr>
                        </table>

                        <p>
                            <a href="./productList.html" className="btnCancel">취소</a>
                            <input type="submit" value="상품등록"/>
                        </p>
                    </form>
                </article>                
            </section>
    </>);

}