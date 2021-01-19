import React from 'react'
import styled from 'styled-components';
import Catalog from '../components/Catalog';
import PLP from '../components/PLP';

const StyledShop = styled.div`
  padding: 10em 0 0 0;
`;

const Shop = () => {
    return (
        <StyledShop>
            {/* <Catalog /> */}
            <PLP />
        </StyledShop>
    )
}

export default Shop
