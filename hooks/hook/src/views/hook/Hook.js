import React, { useState, useEffect } from 'react'


export default function Counter() {
  /**
   * State Hook
   * 用于更新state
   */
  const [count, setCount] = useState(0)

  const [names, setNames] = useState(['aaa', 'bbb'])
  const [friends, setFriends] = useState({ name: 'mc', age: 12 })

  /**
   * Effect Hook
   * 用于更新生命周期，操作dom（传入回调函数，不论是第一次渲染，还是更新渲染，都会执行回调函数）
   * @params: 1. 回调函数 2. 传[]会只执行一次
   */
  useEffect(() => {
    document.title = `当前计数：${count}`
    console.log('Dom更新时调用')

    // 清除effect函数
    return () => {
      console.log('Dom销毁时调用')
    }
  }, [])

  function addFriends(info) {
    setFriends({ ...friends, ...info })
  }

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <ul>
        {
          names.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
      <div>
        <div>姓名： {friends.name}</div>
        <div>年龄： {friends.age}</div>
        <div>性别： {friends.sex}</div>
      </div>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
      <button onClick={e => setNames([...names, 'ccc'])}>添加朋友</button>
      <button onClick={e => addFriends({ sex: 1 })}>添加性别</button>
    </div>
  )
}
