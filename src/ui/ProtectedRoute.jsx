/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPge = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
/* eslint-disable react/prop-types */
export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { user, isLoading, isAthenticated } = useUser();
  // console.log(user);

  // 3. if there is NO authenticated user, redirect the /login
  useEffect(
    function () {
      if (!isAthenticated && !isLoading) navigate("/login");
    },
    [isAthenticated, isLoading, navigate]
  );

  // 2.while loading, show a spinner
  if (isLoading)
    return (
      <FullPge>
        <Spinner />;
      </FullPge>
    );

  // 4.if there is a user, render the app
  if (isAthenticated) return children;
}
