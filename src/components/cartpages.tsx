import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";

function CartPage({
  cart = [],
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    price.toLocaleString("vi-VN") + "₫";

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">🛒 Giỏ hàng</h2>

      <Row className="g-4">
        {/* Danh sách sản phẩm */}
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Header className="fw-bold">
              Danh sách sản phẩm
            </Card.Header>

            <Card.Body>
              {cart.length === 0 ? (
                <div className="text-center py-5">
                  <h5 className="text-muted">
                    Giỏ hàng đang trống
                  </h5>

                  <p className="text-secondary">
                    Hãy thêm một vài cuốn sách nhé!
                  </p>
                </div>
              ) : (
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
                        </td>

                        <td>{formatPrice(item.price)}</td>

                        <td>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() =>
                              decreaseQuantity &&
                              decreaseQuantity(item.id)
                            }
                          >
                            −
                          </Button>

                          <span className="mx-3 fw-bold">
                            {item.quantity}
                          </span>

                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() =>
                              increaseQuantity &&
                              increaseQuantity(item.id)
                            }
                          >
                            +
                          </Button>
                        </td>

                        <td>
                          <strong>
                            {formatPrice(
                              item.price * item.quantity
                            )}
                          </strong>
                        </td>

                        <td>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() =>
                              removeItem &&
                              removeItem(item.id)
                            }
                          >
                            Xóa
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
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

                <strong>
                  {cart.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                  )}
                </strong>
              </div>

              <div className="d-flex justify-content-between mb-4">
                <span>Tổng tiền:</span>

                <strong className="text-primary fs-4">
                  {formatPrice(total)}
                </strong>
              </div>

              <Button
                variant="success"
                className="w-100"
                disabled={cart.length === 0}
              >
                Thanh toán
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;