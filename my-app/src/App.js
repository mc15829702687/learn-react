import React from 'react'
// import './App.css'
import Hoc from './components/Hoc'
import ForwardRef from './components/forwardRef'
import {ThemeProvider} from 'styled-components'

// Ant Design demo组件
import AntDesignCpn from 'components/AntDesignCpn'

// 动画 demo 组件
import TransitionCpn from 'components/TransitionCpn'

function App() {
  return (
    <div className="App">
      {/* 高阶组件 */}
      {/* <Hoc/> */}

      {/* ref转发 */}
      {/* <ThemeProvider theme={{color: 'yellow', fontSize: '20px'}}>
        <ForwardRef/>
      </ThemeProvider> */}
      
      {/* Ant DesignUI库 */}
      {/* <AntDesignCpn/> */}

      {/* 动画 demo 组件 */}
      <TransitionCpn/>
    </div>
  );
}

export default App;
