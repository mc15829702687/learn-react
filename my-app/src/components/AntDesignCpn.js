import React, { PureComponent } from 'react'

// js 日期处理类库
import moment from 'moment'

// 导入 Ant Design 第三方UI库
import { Button, Form, Input, Comment, Tooltip, Avatar } from 'antd'
import 'antd/dist/antd.less'
import { DeleteOutlined } from "@ant-design/icons"

const { TextArea } = Input

// 1. 评论区视图（TextArea输入框，Button按钮）
class HYInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  // 改变文本域内容
  changeText(e) {
    this.setState({
      value: e.target.value 
    })
  }

  // 提交
  onSubmit() {
    console.log(this.state.value, moment().fromNow())
    const commitInfo = {
      id: Date.now(),
      name: 'mc',
      avatar: "https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
      content: <p>{this.state.value}</p>,
      dateTime: moment()
    }
    this.props.submitCommit(commitInfo)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Item>
            <TextArea rows={4} value={this.state.value} onChange={e => this.changeText(e)}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={e => this.onSubmit()}>
              添加评论
          </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

// 2. 评论区列表
class CommentItem extends PureComponent {
  getActions() {
    return [<span onClick={this.props.removeItem}><DeleteOutlined/> 删除</span>]
  }

  render() {
    const {comment} = this.props
    return (
      <div>
        <Comment 
        author={<a href="/#">{comment.name}</a>}
        avatar={<Avatar src={comment.avatar} alt={comment.name}/>}
        content={comment.content}
        datetime={
          <Tooltip title={comment.dateTime.format('YYYY-MM-DD HH:mm:ss')}>
            <span>{comment.dateTime.fromNow()}</span>
          </Tooltip>
        }
        actions={this.getActions()}
        />
      </div>
    )
  }
}


export default class AntDesignCpn extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      commentList: []
    }
  }

  submitCommit(info) {
    this.setState({
      commentList: [...this.state.commentList, info]
    }) 
  }

  // 删除某条评论
  removeItem(id) {
    const list = this.state.commentList.filter(item => item.id !== id)
    this.setState({
      commentList: list
    }) 
  }

  render() {
    return (
      <div>
        {
          this.state.commentList.map(item => {
            return (
              <CommentItem comment={item} key={item.id} removeItem={() => this.removeItem(item.id)}/>
            )
          })
        }
        <HYInput submitCommit={info => this.submitCommit(info)}/>
      </div>
    )
  }
}