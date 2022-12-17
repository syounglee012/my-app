import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function MobileNav({
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  return (
   
          <HeaderContainer>
          </HeaderContainer>
   
  );
}

const HeaderContainer = styled.header`
 
`;
