import { useEffect } from "react";
import { Link } from 'react-router-dom';


export default function Direction(){

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js";
        script.async = true;
        script.onload = ()=>{
            if (window.daum && window.daum.roughmap) {
                new window.daum.roughmap.Lander({
                    timestamp: "1668214668575",
                    key: "2ci7x",
                    mapWidth: "760",
                    mapHeight: "400",
                }).render();
            } else {
                console.error("다음 지도 API를 초기화할 수 없습니다.");
            }
        };

        document.body.appendChild(script);


        return () => {
            document.body.removeChild(script);
        };

    },[]);

    return<>
         <div><img src="../images/sub_top_tit1.png" alt="INTRODUCTION" /></div>
            <section className="introduction">
                <aside>
                    <img src="../images/sub_aside_cate1_tit.png" alt="팜스토리 소개"/>

                    <ul className="lnb">
                        <li><Link to="/introduction/hello">인사말</Link></li>
                        <li className="on"><Link to="/introduction/direction">찾아오시는 길</Link></li>
                    </ul>

                </aside>
                <article>
                    <nav>
                        <img src="/images/sub_nav_tit_cate1_tit2.png" alt="찾아오시는길"/>
                        <p>
                            HOME &gt; 팜스토리소개 &gt; <em>찾아오시는길</em>
                        </p>
                    </nav>

                    <p>
                        <strong>팜스토리</strong><br />
                        주소: 경기도 이천시 잘한다구 신난다동 123<br />
                        전화: 01-234-5678<br />
                    </p>
                    <p>
                        <strong>찾아오시는길</strong><br />
                        <div id="daumRoughmapContainer1668214668575" className="root_daum_roughmap root_daum_roughmap_landing"></div>
                    </p>
                  


                </article>
            </section>
    
    </>;
}