import React, { PureComponent } from 'react'

import { Card, Avatar, Button } from 'antd'
import 'antd/dist/antd.less'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

import styled from 'styled-components'
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group'

const { Meta } = Card

const Wrapper = styled.div`
  .card-enter, .card-appear {
    opacity: 0;
    transform: scale(.8);
  }

  .card-enter-active, .card-appear-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity .5s, transform .5s;
  }

  .card-exit {
    opacity: 1;
  }

  .card-exit-active {
    opacity: 0;
    transform: scale(.8);
    transition: opacity .5s, transform .5s;
  }

  .btn-enter {
    transform: rotate(100%, 0);
    opacity: 0;
  }
  
  .btn-enter-active {
    transform: rotate(0, 0);
    opacity: 1;
    transition: all .5s;
  }

  .btn-exit {
    transform: rotate(0, 0);
    opacity: 1;
  }
  .btn-exit-active {
    transform: rotate(-100%, 0);
    opacity: 0;
    transition: all .5s;
  }
`

export default class TransitionCpn extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      isOn: true,
      friends: []
    }
  }

  addFriend() {
    this.setState({
      friends: [...this.state.friends, 'mc']
    })
  }

  render() {
    return (
      <div>
        <h2>------------------------- transition动画 -------------------------</h2>
        <div>
          <Button type="primary" onClick={e => this.setState({ isShow: !this.state.isShow })}>开始动画</Button>
          <Wrapper>
            <CSSTransition
              in={this.state.isShow}
              classNames="card"
              timeout={1000}
              unmountOnExit={true}
              onEnter={e => console.log('在进入动画之前被触发')}
              onEntering={e => console.log('在应用进入动画时被触发')}
              onEntered={e => console.log('在应用进入动画结束后被触发')}
              onExit={e => console.log('在退出动画之前被触发')}
              onExiting={e => console.log('在应用退出动画时被触发')}
              onExited={e => console.log('在应用退出动画结束后被触发')}
            >
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </CSSTransition>
            {/* SwitchTransition里面必须要有CSSTransition或者Transition，mode（in-out， out-in） */}
            <SwitchTransition mode="out-in">
              <CSSTransition timeout={500} classNames="btn" key={this.state.isOn ? 'on' : 'off'}>
                <Button type="primary" onClick={e => this.setState({ isOn: !this.state.isOn })}>
                  {this.state.isOn ? 'on' : 'off'}
                </Button>
              </CSSTransition>
            </SwitchTransition>
            {/* TransitionGroup 一组动画 */}
            <TransitionGroup>
              {
                this.state.friends.map((item, index) => {
                  return (
                    <CSSTransition timeout={500} key={index} classNames="card">
                      <div>{item}</div>
                    </CSSTransition>
                  )
                })
              }
            </TransitionGroup>
            <button onClick={e => this.addFriend()}>+friend</button>
          </Wrapper>
        </div>
      </div>
    )
  }
}