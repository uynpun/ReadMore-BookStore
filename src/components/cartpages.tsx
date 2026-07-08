import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";

type CartItem = {
  id: string | number;
  title: string;
  price: number;
  quantity: number;
};

function CartPage({ cart = [] }: { cart?: CartItem[] }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-5">
      <h2 className="mb-4">🛒 Giỏ hàng</h2>

      <Row>
        {/* Danh sách sản phẩm */}
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Body>
              {cart.length === 0 ? (
                <p className="text-center text-muted">
                  Giỏ hàng đang trống.
                </p>
              ) : (
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Sách</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.title}</td>

                        <td>
                          {item.price.toLocaleString("vi-VN")}₫
                        </td>

                        <td>{item.quantity}</td>

                        <td>
                          {(item.price * item.quantity).toLocaleString(
                            "vi-VN"
                          )}
                          ₫
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Tổng tiền */}
        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h4>Tổng thanh toán</h4>

              <hr />

              <h3 className="text-primary">
                {total.toLocaleString("vi-VN")}₫
              </h3>

              <Button
                variant="success"
                className="w-100 mt-3"
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