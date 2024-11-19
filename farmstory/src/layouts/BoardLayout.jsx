
import Aside from '../components/common/Aside';
import Nav from '../components/common/Nav';
import UseCates from '../hooks/UseCates';

// eslint-disable-next-line react/prop-types
export default function  BoardLayout ({ children }){

    const[cate1, cate2, board] = UseCates();


    return ( <>
               <div id="sub">
                    <div>
                      {cate1 === "introduction" && (<img src="/images/sub_top_tit1.png" alt="INTRODUCTION" />)}
                      {cate1 === "market" && (<img src="/images/sub_top_tit2.png" alt="market" />)}
                      {cate1 === "croptalk" && (<img src="/images/sub_top_tit3.png" alt="croptalk" />)}
                      {cate1 === "event" && (<img src="/images/sub_top_tit4.png" alt="event" />)}
                      {cate1 === "community" && (<img src="/images/sub_top_tit5.png" alt="community" />)}
                    </div>
                    <section className={cate1}>
                        <Aside />
                        <article id="board">
                            <Nav/>
                        {children}
                        </article>
                    </section>
                    </div>
        </>);

};

