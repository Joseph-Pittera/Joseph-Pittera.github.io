import { useState } from "react";
import styled from "styled-components";

const FooterCtn = styled.footer`
  color: WhiteSmoke;
  padding: 32px;
  border-top: solid 3px WhiteSmoke;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
`;

const FooterElt = styled.div`
  margin-bottom: 10px;
`;

export default function Footer() {
  const [inputValue, setInputValue] = useState("");

  function emailValidation(email: string) {
    if (email !== "" && !email.includes("@")) {
      alert(email + " is a wrong email");
    }
  }
  return (
    <FooterCtn>
      <FooterElt>Pour les passionné·e·s de DBZ</FooterElt>
      <FooterElt>Laissez-nous votre mail :</FooterElt>
      <input
        type="email"
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => emailValidation(e.target.value)}
        defaultValue={inputValue}
      />
      <label>
        {inputValue ? `Un email va être envoyé à ${inputValue}` : ""}
      </label>
    </FooterCtn>
  );
}
