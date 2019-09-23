import React from "react";
import styled from "styled-components";

class Module extends React.Component {
  render() {
    return (
      <Container>
        <Cover>
          <Image source={this.props.image} />
          <Title>{this.props.title}</Title>
          <Author>{this.props.author}</Author>
        </Cover>
        <Footer>
          <Icon source={this.props.icon} />
          <Text>{this.props.text}</Text>
        </Footer>
      </Container>
    );
  }
}

export default Module;

const Container = styled.View`
  width: 290px;
  height: 240px;
  border-radius: 14px;
  marginLeft: 20;
  elevation: 4;
`;

const Cover = styled.View`
  height: 170px;
  overflow: hidden;
`;

const Image = styled.Image`

  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  width: 100%;
  height: 290px;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 300px;
`;

const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Footer = styled.View`
  height: 65px;
  overflow: hidden;
  background: white;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;


const Text = styled.Text`
  font-size: 17px;
  line-height: 24px;
  color: #3c4560;
  position: absolute;
  left: 70px;
  right: 1px;
  top: 5px;
`;

const Icon = styled.Image`
  width: 50px;
  height: 50px;
  marginLeft: 10px;
  marginTop: 8px;
`;

