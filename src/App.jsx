import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [cart, setCart] = useState([]);
    return (
        <div>
            <h2>🛒 Simple Shop</h2>
            <fieldset>
                <legeng>상품추가</legeng>
                <form
                    onSubmit={event => {
                        event.preventDefault();

                        if (name === "") return;
                        setCart([...cart, { name, quantity: 1 }]);
                        setName("");
                    }}>
                    <input
                        placeholder={"상품명을 입력하세요"}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                        value={name}
                    />
                    <button type={"submit"}>카트에 담기</button>
                </form>
            </fieldset>
            <br />
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
                                <button>-</button>
                                {value.quantity}
                                <button>+</button>
                            </td>
                            <td></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <h3>총품목: 0개 / 총수량: 0개</h3>
        </div>
    );
}

export default App;
