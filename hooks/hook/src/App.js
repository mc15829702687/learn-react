import React, { createContext } from 'react';

import './App.css';

import Counter from './views/hook/Hook'
import Context from './views/hook/Context'

// 状态提升
import State from './views/state/State'

// 组合和继承
import Combine from './views/combination/Combine'

// Hook使用useReduce
import HookUseReduce from './views/hook/reducer/CounterReducer'

// Hook使用useCallback
import UseCallbackCpn from './views/hook/callback/UseCallbackCpn'

// Hook使用useMemo
import UseMemoCpn from './views/hook/useMemo/UseMemo'

// Hook使用useRef
import UseRefCpn from './views/hook/useRef/UseRef'

// Hook 使用 useImperativeHandle
import UseImperativeHandleCpn from './views/hook/useImperativeHandle/UseImperativeHandle'

// Hook 使用 useLayoutEffect
import UseLayoutEffectCpn from './views/hook/useLayoutEffect/UseLayoutEffect'

// Hook 使用自定义Hook
import CustumHookCpn from './views/hook/customHook/CustumHook'

export const UserContext = createContext()
export const ThemeContext = createContext()

function App() {
  return (
    <div className="App">
      {/* 状态提升 */}
      {/* <State/> */}

      {/* 组合和继承 */}
      {/* <Combine /> */}

      {/* 常见hook，改变state,生命周期函数，操作dom */}
      {/* <Counter/> */}

      {/* Context Hook 劫持context */}
      {/* <UserContext.Provider value={{name: 'mc', age: 18}}>
        <ThemeContext.Provider value="第二层">
          <Context/>
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* hook------- useReduce */}
      {/* <HookUseReducer/> */}

      {/* hook------- useCallback */}
      {/* <UseCallbackCpn/> */}

      {/* hook------- useMemo */}
      {/* <UseMemoCpn/> */}

      {/* hook------ useRef */}
      {/* <UseRefCpn /> */}

      {/* hook --------- useImperativeHandle */}
      {/* <UseImperativeHandleCpn/> */}

      {/* hook --------- useLayoutEffect */}
      {/* <UseLayoutEffectCpn /> */}

      {/* hook --------- 自定义hook */}
      <UserContext.Provider value={{height: 1.88}}>
        <ThemeContext.Provider value={{name: 'mc', age: 12}}>
          <CustumHookCpn />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
