import styled from "styled-components";

const BannerDiv = styled.div`
  color: WhiteSmoke;
  text-align: right;
  padding: 32px;
  border-bottom: solid 3px WhiteSmoke;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
`;

export default function Banner({ children }: { children: React.ReactNode }) {
  return <BannerDiv>{children}</BannerDiv>;
}
