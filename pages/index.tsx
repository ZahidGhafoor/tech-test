import { useEffect, useState } from "react";
// Styled-Components
import {
  HomeContainer,
  PayoutHistory,
  PayoutHistoryTitle,
  PayoutLeft,
  Title,
  StyledTable,
  StyledTh,
  StyledTd,
  StatusSpan,
  TableValue,
  EvenRow,
  SpacedBetween,
  SearchBox,
  StyledButton,
} from "../styles/HomeStyles";

// Service
import PayoutService from "@/services/payout.service";
// MUI library
import CircleLoader from "@/components/CircleLoader";
import { Pagination, TextField } from "@mui/material";

// Redux
import { payoutActions } from "@/redux/slices/payoutSlice";
import { useDispatch, useSelector } from "react-redux";

// Utils
function formatDateString(inputDateString: any) {
  const dateObject = new Date(inputDateString);

  const formattedDate = dateObject.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return formattedDate;
}

export default function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const payouts = useSelector((state: any) => state.payout.payouts);
  const totalPayouts = useSelector((state: any) => state.payout.count);
  const loading = useSelector((state: any) => state.payout.loading);
  const page = useSelector((state: any) => state.payout.page);
  useEffect(() => {
    PayoutService.getPayouts(dispatch, page);
  }, [dispatch, page]);

  const getSearchedPayout = () => {
    PayoutService.getSearchedPayouts(dispatch, search);
  };
  const resetSearch = () => {
    setSearch("");
    PayoutService.getPayouts(dispatch, 1);
  };
  return (
    <HomeContainer>
      <SpacedBetween>
        <Title>Payouts</Title>
        <SearchBox>
          <TextField
            id="filled-basic"
            label="Search by Name"
            variant="filled"
            onChange={(e: any) => setSearch(e.target.value)}
            value={search}
          />
          <StyledButton onClick={getSearchedPayout} isred={"false"}>
            Search
          </StyledButton>
          <StyledButton onClick={resetSearch} isred={"true"}>
            Reset
          </StyledButton>
        </SearchBox>
      </SpacedBetween>
      <PayoutHistory>
        <PayoutLeft></PayoutLeft>
        <PayoutHistoryTitle>Payout History</PayoutHistoryTitle>
      </PayoutHistory>
      {loading ? (
        <CircleLoader />
      ) : payouts.length < 1 ? (
        <h1>No Payout Found</h1>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <StyledTh paddingleft={"true"}>Date & Time</StyledTh>
              <StyledTh>Username</StyledTh>
              <StyledTh>Status</StyledTh>
              <StyledTh>Value</StyledTh>
            </tr>
          </thead>
          <tbody>
            {payouts.map((row: any, index: number) => (
              <EvenRow bg={index % 2 === 0 ? "true" : "false"} key={index}>
                <StyledTd paddingleft={"true"}>
                  {formatDateString(row.dateAndTime)}
                </StyledTd>
                <StyledTd>{row.username}</StyledTd>
                <StyledTd>
                  <StatusSpan status={row.status}>{row.status}</StatusSpan>
                </StyledTd>
                <TableValue>{row.value}</TableValue>
              </EvenRow>
            ))}
          </tbody>
        </StyledTable>
      )}

      <SpacedBetween>
        <p>{totalPayouts} Payouts</p>
        <Pagination
          page={page}
          // disabled={refreshLoader}
          count={Math.ceil(totalPayouts / 10)}
          onChange={(_e, page: number) => {
            setSearch("");
            dispatch(payoutActions.setPage(page));
          }}
        />
      </SpacedBetween>
    </HomeContainer>
  );
}
