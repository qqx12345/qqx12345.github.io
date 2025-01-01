import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Index from '../page/page.tsx';
import Study from '../page/study/study.tsx';
import ArticlePreview from '../page/study/veiw.tsx';
import Playgound from '../page/playgound/nav.tsx';
const router: RouteObject[] = [
  {
    path: "/",
    element: <Index/>,
  },
  {
    path:"/note",
    element:<Study/>,
  },
  {
    path:"/note/:article",
    element:<ArticlePreview/>,
  },
  {
    path:"/playgound",
    element:<Playgound/>,
    children:[]
  }
];

const browserRouter = createBrowserRouter(router);
export default browserRouter;
