import './App.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();

  const handleClick = e => {
    console.log('key', e.key);
    history.push(e.key);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Menu mode="horizontal" onClick={handleClick}>
          <Menu.Item key="home" icon={<SettingOutlined />} >
            首页
          </Menu.Item>
          <Menu.Item key="seller" icon={<MailOutlined />} >
            商家平台
          </Menu.Item>
          <Menu.Item key="waiter" icon={<AppstoreOutlined />} >
            小二平台
          </Menu.Item>
        </Menu>
      </header>
    </div>
  );
}

export default App;
