import { Container, Row, Col, Button, Badge } from "react-bootstrap";

function CategoryList({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <Container className="my-4">
      {categories.length > 0 ? (
        <Row className="g-3 justify-content-center">

          {/* Tất cả */}
          <Col xs={12} sm={6} md={4} lg={2}>
            <Button
              variant={!activeCategory ? "primary" : "outline-primary"}
              className="w-100"
              onClick={() => setActiveCategory(null)}
            >
              📖 Tất cả
            </Button>
          </Col>

          {categories.map((category) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={2}
              key={category.id}
            >
              <Button
                className="w-100"
                variant={
                  activeCategory === category.name
                    ? "primary"
                    : "outline-primary"
                }
                onClick={() => setActiveCategory(category.name)}
              >
                {category.icon} {category.name}

                {category.name === "Kinh doanh" && (
                  <Badge bg="danger" className="ms-2">
                    HOT
                  </Badge>
                )}
              </Button>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center text-muted">
          Không có danh mục.
        </p>
      )}
    </Container>
  );
}

export default CategoryList;