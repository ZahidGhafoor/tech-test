import styled from "styled-components";
interface EvenRowProps {
  bg: String;
}
interface statusProps {
  status: String;
}
interface headProps {
  paddingleft: String;
}
interface buttonProps {
  isred: String;
}

export const EvenRow = styled.tr<EvenRowProps>`
  height: 48px;
  background: ${(props: any) =>
    props.bg === "true" ? "rgba(244, 244, 244, 0.5)" : "transparent"};
`;
export const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #272b30;
  /* H3 */
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 120% */
  letter-spacing: -0.8px;
  margin: 0;
  margin-top: 35px;
  margin-bottom: 60px;
`;
export const PayoutHistory = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const PayoutLeft = styled.div`
  width: 16px;
  height: 32px;
  background-color: #999dff;
  border-radius: 3px;
`;
export const PayoutHistoryTitle = styled.div`
  color: #272b30;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.8px;
`;

export const StyledTable = styled.table`
  width: 100%;
  margin: 18px 0;
`;

export const StyledThTd = styled.th`
  text-align: left;
  height: 48px;
`;

export const StyledTh = styled(StyledThTd)<headProps>`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.12px;
  color: #6f767e;
  padding-left: ${(props: any) =>
    props.paddingleft === "true" ? "24px" : "0"};
`;

export const StyledTd = styled(StyledThTd)<headProps>`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;
  color: #6f767e;
  padding-left: ${(props: any) =>
    props.paddingleft === "true" ? "24px" : "0"};
`;

export const OddRow = styled.tr`
  height: 48px;
`;

export const StatusSpan = styled.span<statusProps>`
  padding: 2px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: ${(props: any) =>
    props.status === "Pending" ? "rgba(111, 118, 126, 0.40)" : "#60CA57"};
  color: #1a1d1f;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;
  width: fit-content;
`;

export const TableValue = styled.td`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;
  color: #1a1d1f !important;
`;
export const SpacedBetween = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: space-between;
`;
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledButton = styled.button<buttonProps>`
  background-color: ${(props: any) =>
    props.isred == "true" ? "#e53935" : "#4caf50"};
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
`;
