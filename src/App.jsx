import { useState } from "react";

function App() {
    const [name, setName] = useState(""); // input 관리용 state
    const [cart, setCart] = useState([]); // 장바구니 관리용 state

    const onAdd = event => {
        event.preventDefault(); // 중단시키기

        if (name === "") return; // 한줄뿐이면 중괄호 생략
        setCart([...cart, { name: name, quantity: 1 }]);
        setName("");
    };

    const onChange = e => {
        setName(e.target.value);
    };

    const onUpdateCount = (index, number) => {
        // 1가지 기능을 하는 함수를 만드는 건데,
        // '1' 을 더한는 함수가 아니라, '수량을 변경하는 ' 함수를 만드는것
        // 얼마를 바꿀것인가는 함수를 싷행 하 때 매개 변수를 통해 제어함
        // 비슷한 기능을 하는 것은 통합을 하자

        // 계산은 위에서
        const newCart = [...cart];
        const nextCount = newCart[index].quantity + number;
        if (nextCount > 0) {
            // 저장은 if문에서
            newCart[index].quantity = nextCount;
            setCart(newCart); // state는 직접적으로 수장하면 안된다
        }
    }
    return (
        <div>
            <h2>🛒 Simple Shop</h2>
            <fieldset>
                <legend>상품추가</legend>
                <form
                    // (evern) => {}
                    onSubmit={onAdd}>
                    <input
                        placeholder={"상품녕을 입력하세요"}
                        onChange={onChange}
                        value={name} // 값을 지워주려면
                    />
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
            <table border={1} cellPadding={10} cellSpacing={0} style={{ width: "100%" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th>상품명</th>
                        <th>수량제어</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>
                                    <button onClick={() => onUpdateCount(index, -1)}>-</button>
                                    {value.quantity}
                                    <button onClick={() => onUpdateCount(index, 1)}>+</button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            setCart(
                                                cart.filter((v, i) => {
                                                    return i !== index;
                                                }),
                                            );
                                        }}>
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h3>총품목: {cart.length}개/총 수량: 0개</h3>
        </div>
    );
}

export default App;
