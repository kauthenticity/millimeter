import styled from "styled-components";
import { GrPrevious } from 'react-icons/gr'
import {GrNext} from 'react-icons/gr'

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <GrPrevious style={{ fontSize: "0.5rem" }} />
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          <GrNext style={{ fontSize: "0.5rem" }} />
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  color: black;
  font-size: 0.7rem;
  background : none;

  &:hover {
    cursor: pointer;
  }

  &[aria-current] {
    font-weight: bold;
  }
`;

export default Pagination;
