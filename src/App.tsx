import React from 'react';
import Router from './shared/Router';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { useAtom } from 'jotai';
import { myPageHover, searchKeyWord } from './globalState/jotai';
import SearchSummary from './components/search/SearchSummary';
import MyPageHover from './components/mypage/MyPageHover';
import ReportIcon from './components/report/ReportIcon';

import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './';

const queryClient = new QueryClient();

const App = () => {
  const [search, _] = useAtom(searchKeyWord);
  const [myPage, __] = useAtom(myPageHover);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        {search && <SearchSummary />}
        {myPage && <MyPageHover />}
        <ReportIcon />
        <Router />
        <ToastContainer
          style={{
            width: '530px'
          }}
          toastStyle={{
            backgroundColor: 'black',
            color: '#FFF',
            minWidth: '530px',
            maxHeight: '200px',
            marginBottom: '0 10px',
            padding: '0',
            textAlign: 'center',
            borderRadius: '10px',

            fontFamily: 'Pretendard',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '24px'
          }}
          position="bottom-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          transition={Slide}
          pauseOnHover={false}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
