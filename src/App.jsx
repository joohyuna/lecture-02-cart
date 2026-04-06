import { useState } from "react";

function App() {
    const [name, setName] = useState(""); // input 관리용 state
    const [cart, setCart] = useState([]); // 장바구니 관리용 state

    return (
        <div>
            <h2>🛒 Simple Shop</h2>
            <fieldset>
                <legend>상품추가</legend>
                <form>
                    <input placeholder={'상품녕을 입력하세요'} />
                    <button type={"submit"}>카트에 담기</button>
                </form>
            </fieldset>
            <br />
            {/*
                react 에서 inline 형식으로 스타일을 적용하는 방법은
                style={} 속성을 동일하레 이용함
                단! 이 안에 들어가는 값은 "갱체"로 작성함
                css: background-color => backgroundColor => 카멜 케이스로 작성
            */}
            <table border={1} cellpadding={10} cellspacint={0} style={{ width: "100%" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th>상품명</th>
                        <th>수량제어</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <h3>총품목: 0개/총 수량: 0개</h3>
        </div>
    );
}

export default App;