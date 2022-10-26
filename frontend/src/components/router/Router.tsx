import { lazy, Suspense } from 'react';
import { RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import Layout from '~/layout';
import Loader from '~/components/shared/Loader';

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const CoursesScreen = lazy(() => import('~/components/screens/CoursesScreen'));
const CourseScreen = lazy(() => import('~/components/screens/CourseScreen'));
const BlogsScreen = lazy(() => import('~/components/screens/BlogsScreen'));
const Page404Screen = lazy(() => import('~/components/screens/404'));

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '/courses',
          element: <CoursesScreen />,
        },
        {
          path: 'course/:courseId',
          element: <CourseScreen />,
        },
        {
          path: '/blogs',
          element: <BlogsScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loader />}>{element}</Suspense>
    </div>
  );
};
