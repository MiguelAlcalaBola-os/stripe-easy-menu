import React, { useState, useRef } from 'react';
import styled from 'styled-components';



const ScrollDownLink = ({ targetPos, children }) => {
 const scrollContainerRef = useRef(null);
 const [scrollPos, s, setScrollPos] = useState(0);

 const handleClick = (e) => {
 e.preventDefault();
 const scrollContainer = scrollContainerRef.current;
 const scrollPos = scrollContainer.offsetTop + targetPos;
 setScrollPos(scrollPos);
 scrollContainer.scrollTo({ top: scrollPos, behavior: 'smooth' });
 };

 return (
 <LinkWrapper onClick={handleClick}>
 {children}
 <ScrollTarget scrollPos={scrollPos} />
 </LinkWrapper>
 );
};

const LinkWrapper = styled.a`
 cursor: pointer;
 display: inline-block;
 color: aqua;
 text-decoration: none;
 position: relative;
`;

const ScrollTarget = styled.div`
 position: absolute;
 top: ${({ scrollPos }) => `${scrollPos}px`};
 left: 0;
 width: 1px;
 height: 1px;
`;

export default ScrollDownLink;