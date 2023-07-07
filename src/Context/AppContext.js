import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [token, setToken] = useState(false);
  const [liked, setLiked] = useState(false);
  const [request, setRequest] = useState(false);
  const [messageAlert, setMessageAlert] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [userData, setUserData] = useState({});
  const [events, setEvents] = useState({});
  const [theme, setTheme] = useState('dark');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // async function saveValuesToStorage() {
    //   try {
    //     await AsyncStorage.setItem('userToken', JSON.stringify(token));
    //     await AsyncStorage.setItem('userUniqueId1', JSON.stringify(uniqueId));
    //   } catch (error) {
    //     console.log('Error saving data to AsyncStorage:', error);
    //   }
    // }
    // saveValuesToStorage();
  }, [token, uniqueId]);

  const contextValues = useMemo(
    () => ({
      token,
      setToken,
      liked,
      setLiked,
      request,
      setRequest,
      uniqueId,
      setUniqueId,
      messageAlert,
      setMessageAlert,
      userData,
      setUserData,
      events,
      setEvents,
      theme,
      setTheme,
      loader,
      setLoader,
    }),
    [
      token,
      setToken,
      liked,
      setLiked,
      request,
      setRequest,
      uniqueId,
      setUniqueId,
      messageAlert,
      setMessageAlert,
      userData,
      setUserData,
      events,
      setEvents,
      theme,
      setTheme,
      loader,
      setLoader,
    ],
  );

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
