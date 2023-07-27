import React from 'react'
import { styled } from 'styled-components'


const Navigarion = styled.div`
    height:60px;
    border: 1px solid black;
    padding: 10px 20px;
`

const Wrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
`
const Img = styled.div`
    background-image: url("");

`
const Center = styled.div`
    flex: 1;
`

const Right = styled.div`
    flex: 1;
`

export default function Navigation() {
  return (
    <Navigarion>
        <Wrapper>
            <Left>
                <Img>
                    Logo
                </Img>
            </Left>

            <Center>
                Company Name
            </Center>

            <Right>
                Right
            </Right>
        </Wrapper>
    </Navigarion>
  )
}
