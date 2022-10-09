// global style 정의
// stylesheet의 전역적인 성질 & 이름 충돌을 피하기 위해 styles.css 파일은 여기에만 import 하는 것이 좋다.
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/global.css';

// App 컴포넌트는 모든 페이지의 Top 컴포넌트이다. - 페이지 간의 이동을 하면서 state를 유지하고 싶을 때 App 컴포넌트를 활용할 수 있다.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
