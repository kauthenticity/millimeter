import { React, useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import "./modal.css";
import { MdClose } from "react-icons/md";
import { agreetment1, agreetment2, agreetment3 } from "./agreetments";
import { checkboxClasses } from "@mui/material";

const Agreetment = ({ checks, setChecks, allCheck, setAllCheck }) => {
  const [more1, setMore1] = useState(false);
  const [more2, setMore2] = useState(false);
  const [more3, setMore3] = useState(false);

  const onClickMore1 = () => {
    setMore1(!more1);
  };

  const onClickMore2 = () => {
    setMore2(!more2);
  };

  const onClickMore3 = () => {
    setMore3(!more3);
  };

  const onChkAllChange = (checked) => {
    setAllCheck(!allCheck);

    if (checked) {
      setChecks([...checks, "ck1", "ck2", "ck3"]);
    } else if (!checked && checks.length > 0) {
      setChecks([]);
    }
  };

  const onCkChange = (checked, name) => {
    if (checked) {
      setChecks([...checks, name]);
    } else if (!checked && checks.includes(name)) {
      setChecks(checks.filter((item) => item != name));
      setAllCheck(false);
    }
  };

  useEffect(() => {
    if (checks.length === 3) {
      setAllCheck(true);
    }
  }, [checks]);

  return (
    <>
      <AgreetmentContainer>
        <CheckboxLeft
          name="all"
          onChange={(e) => onChkAllChange(e.currentTarget.checked)}
          checked={allCheck}
          type="checkbox"
        />
        전체 동의
      </AgreetmentContainer>
      <AgreetmentContainer>
        <CheckboxLeft
          name="ck1"
          onChange={(e) =>
            onCkChange(e.currentTarget.checked, e.currentTarget.name)
          }
          checked={checks.includes("ck1")}
          type="checkbox"
        />
        [필수] 이용 약관 동의
        <ViewMore onClick={onClickMore1}>
          자세히 보기
          <Modal
            ariaHideApp={false}
            isOpen={more1}
            onRequestClose={onClickMore1}
            className="modal agreetment"
            overlayClassName="overlay agreetment"
          >
            <MdClose
              onClick={onClickMore1}
              style={{
                float: "right",
                marginBottom: "1rem",
                cursor: "pointer",
              }}
            />
            <br />
            <div>{agreetment1}</div>
            <Button>닫기</Button>
          </Modal>
        </ViewMore>
      </AgreetmentContainer>

      <AgreetmentContainer>
        <CheckboxLeft
          name="ck2"
          type="checkbox"
          checked={checks.includes("ck2")}
          onChange={(e) =>
            onCkChange(e.currentTarget.checked, e.currentTarget.name)
          }
        />
        [필수] 개인정보 수집 및 이용 방침{" "}
        <ViewMore onClick={onClickMore2}>
          자세히 보기
          <Modal
            ariaHideApp={false}
            isOpen={more2}
            onRequestClose={onClickMore2}
            className="modal agreetment"
            overlayClassName="overlay agreetment"
          >
            <MdClose
              onClick={onClickMore2}
              style={{
                float: "right",
                marginBottom: "1rem",
                cursor: "pointer",
              }}
            />
            <br />
            <div>{agreetment2}</div>
            <Button>닫기</Button>
          </Modal>
        </ViewMore>
      </AgreetmentContainer>

      <AgreetmentContainer>
        <CheckboxLeft
          name="ck3"
          type="checkbox"
          checked={checks.includes("ck3")}
          onChange={(e) =>
            onCkChange(e.currentTarget.checked, e.currentTarget.name)
          }
        />
        [선택] 쇼핑정보 수신 동의
        <ViewMore onClick={onClickMore3}>
          자세히 보기
          <Modal
            ariaHideApp={false}
            isOpen={more3}
            onRequestClose={onClickMore3}
            className="modal agreetment3"
            overlayClassName="overlay agreetment"
          >
            <MdClose
              onClick={onClickMore3}
              style={{
                float: "right",
                marginBottom: "1rem",
                cursor: "pointer",
              }}
            />
            <br />
            <div>{agreetment3}</div>
            <Button>닫기</Button>
          </Modal>
        </ViewMore>
      </AgreetmentContainer>
    </>
  );
};

export default Agreetment;
const Button = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  margin: 2rem 0;
  border: 1px solid #121212;
  padding: 0.6rem 0;
  font-family: "Lora";

  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: #232323;
    color: white;
  }
`;

const ViewMore = styled.div`
  font-family: "Noto Sans KR";
  margin-left: 1rem;
  color: #666;
  cursor: pointer;
`;
const CheckboxLeft = styled.input`
  margin: 0;
  margin-right: 0.5rem;
`;

const AgreetmentContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR";
  margin: 1rem 0;
`;
