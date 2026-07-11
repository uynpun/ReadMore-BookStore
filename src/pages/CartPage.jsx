// CartPage.jsx - Tuần 10
// Người làm: B
// ✅ Migrate sang Redux: useSelector + useDispatch
// ✅ Không còn nhận props — tự đọc cart từ Redux store
// ✅ Delete với confirm dialog

import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCart,
  selectCartCount,
  selectCartTotal,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from "../store/cartSlice";

function CartPage() {
  // ✅ Redux: đọc state từ store
  const cart = useSelector(selectCart);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const formatPrice = (price) =>
    price.toLocaleString("vi-VN") + "₫";

  // ✅ Xóa với confirm
  function handleRemove(item) {
    if (window.confirm(`Bạn có chắc muốn xóa "${item.title}" khỏi giỏ hàng?`)) {
      dispatch(removeItem(item.id));
    }
  }

  // ✅ Xóa toàn bộ với confirm
  function handleClearCart() {
    if (window.confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) {
      dispatch(clearCart());
    }
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">🛒 Giỏ hàng</h2>

      {cart.length === 0 ? (
        // ✅ Giỏ hàng trống
        <div className="text-center py-5">
          <div className="text-6xl mb-4">🛒</div>
          <h4 className="text-muted mb-3">Giỏ hàng đang trống</h4>
          <p className="text-secondary mb-4">
            Hãy thêm một vài cuốn sách nhé!
          </p>
          <Button as={Link} to="/books" variant="primary">
            📚 Xem danh sách sách
          </Button>
        </div>
      ) : (
        <Row className="g-4">
          {/* Danh sách sản phẩm */}
          <Col lg={8}>
            <Card className="shadow-sm">
              <Card.Header className="fw-bold d-flex justify-content-between align-items-center">
                <span>Danh sách sản phẩm ({cartCount})</span>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleClearCart}
                >
                  🗑️ Xóa tất cả
                </Button>
              </Card.Header>

              <Card.Body>
                <Table responsive hover align="middle">
                  <thead>
                    <tr>
                      <th>Sách</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <strong>{item.title}</strong>
                          <br />
                          <small className="text-muted">{item.author}</small>
                        </td>

                        <td>{formatPrice(item.price)}</td>

                        <td>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                          >
                            −
                          </Button>

                          <span className="mx-3 fw-bold">
                            {item.quantity}
                          </span>

                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => dispatch(increaseQuantity(item.id))}
                          >
                            +
                          </Button>
                        </td>

                        <td>
                          <strong>
                            {formatPrice(item.price * item.quantity)}
                          </strong>
                        </td>

                        <td>
                          {/* ✅ Delete với confirm */}
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleRemove(item)}
                          >
                            Xóa
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* Tổng thanh toán */}
          <Col lg={4}>
            <Card className="shadow-sm">
              <Card.Header className="fw-bold">
                Thanh toán
              </Card.Header>

              <Card.Body>
                <div className="d-flex justify-content-between mb-3">
                  <span>Tổng sản phẩm:</span>
                  <strong>{cartCount}</strong>
                </div>

                <div className="d-flex justify-content-between mb-4">
                  <span>Tổng tiền:</span>
                  <strong className="text-primary fs-4">
                    {formatPrice(cartTotal)}
                  </strong>
                </div>

                <Button
                  variant="success"
                  className="w-100"
                  disabled={cart.length === 0}
                >
                  💳 Thanh toán
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default CartPage;
