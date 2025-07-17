import React, { useEffect, useState } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  AppRoot,
  View,
  Panel,
  PanelHeader,
  Group,
  Avatar,
  Title,
  Spinner
} from '@vkontakte/vkui';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        await bridge.send('VKWebAppInit');
        const userInfo = await bridge.send('VKWebAppGetUserInfo');
        setUser(userInfo);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <AppRoot>
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader>Шкала тупости по фото</PanelHeader>
          <Group>
            {loading ? (
              <Spinner size="large" style={{ margin: '20px auto' }} />
            ) : user ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
                <Avatar size={96} src={user.photo_200} />
                <Title level="2" style={{ marginTop: 16 }}>{user.first_name} {user.last_name}</Title>
              </div>
            ) : (
              <Title level="2" style={{ padding: 20 }}>Не удалось загрузить данные</Title>
            )}
          </Group>
        </Panel>
      </View>
    </AppRoot>
  );
}
