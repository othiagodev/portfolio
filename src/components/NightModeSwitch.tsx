import React, { useEffect } from 'react';
import ReactSwitch from 'react-switch';
import usePersistedState from '../utils/usePersistedState';

export default function NightModeSwitch() {
  const [switchState, setSwitchState] = usePersistedState<boolean>('theme', true);

  function setTheme(selectors: string, className: string) {
    const root = document.querySelector(selectors);
    if (switchState) root?.classList.add(className);
    else root?.classList.remove(className);
  }

  useEffect(() => {
    setTheme('html', 'dark-mode');
  }, [switchState]);

  return (
    <div id="dark-mode-switch" className="switch-container">
      <ReactSwitch
        className="switch"
        onChange={() => setSwitchState(!switchState)}
        checked={switchState}
        onColor="#2D2D2D"
        offColor="#EBEBEB"
        onHandleColor="#202020"
        offHandleColor="#FAFAFA"
        activeBoxShadow="none"
        checkedIcon={<span role="img" aria-label="moon">🌜</span>}
        uncheckedIcon={<span role="img" aria-label="sun">🌞</span>}
      />
    </div>
  );
}
