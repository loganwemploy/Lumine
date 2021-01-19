import React from 'react'
import styled from 'styled-components';
import PLP from '../components/PLP';

const StyledShop = styled.div`
  padding: 10em 0 0 0;
`;

const Shop = () => {
    return (
        <StyledShop>
            <PLP />
        </StyledShop>
    )
}

export default Shop
