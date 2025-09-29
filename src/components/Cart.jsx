function Cart() {
  const items = ["buds", "Power Bank", "SSD", "Hoddie","Tablet"]
  return (
    <div>
      <h3>Cart 🛒</h3>
      {items.length > 0 && <h2> You have {items.length} items in you cart</h2>}

      <ul>
        {
        items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))
      }
      </ul>

    </div>
  )
}

export default Cart
