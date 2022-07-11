import {CommonActions, StackActions} from '@react-navigation/native';
let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}

function replace(routeName, params) {
  navigator.dispatch(StackActions.replace(routeName, params));
}

function push(routeName, params) {
  navigator.dispatch(StackActions.push(routeName, params));
}

function reset(routeName, params) {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    }),
  );
}

function setParam(params) {
  navigator.dispatch(
    CommonActions.setParams({
      params,
    }),
  );
}

function goBack() {
  navigator.dispatch(CommonActions.goBack());
}

export default {
  navigate,
  setParam,
  setTopLevelNavigator,
  reset,
  goBack,
  replace,
  push,
};
