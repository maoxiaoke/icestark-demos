import * as React from 'react';
import BasicLayout from '../BasicLayout';
import UserLayout from '../UserLayout';

const { useEffect } = React;
export default function FrameworkLayout(props: {
  children: React.ReactNode;
  pathname: string;
  appLeave: { path: string };
  appEnter: { path: string };
  routeInfo: any;
}) {
  const { pathname, children, appLeave, appEnter, routeInfo } = props;

  const { hash = '' } = routeInfo;
  const Layout = hash === '#/login' ? UserLayout : BasicLayout;

  useEffect(() => {
    console.log('== app leave ==', appLeave);
    if (appLeave.path === '/angular' && window.webpackJsonp) {
      // remove webpackJsonp added by Angular app
      delete window.webpackJsonp;
    }
  }, [appLeave]);

  useEffect(() => {
    console.log('== app enter ==', appEnter);
  }, [appEnter]);

  return (
    <Layout pathname={hash.toString().slice(1)}>{children}</Layout>
  );
}
