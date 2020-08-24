import React , {useEffect} from 'react'
import { connect } from "react-redux";
import App from './App'
import { WithSpinner } from './COMPONENTS/WITHSPINNER'
import { selectIsDataFetching } from './RESELECT';
import { createStructuredSelector } from 'reselect';
import { authentification, createUser } from './FIREBASE';
import { SetCurrentUser } from './REDUX/ACTIONS/USERACTION';
import { fetchShopDataAsync } from './REDUX/ACTIONS/SHOPDATA';

const AppWrapping = WithSpinner(App)
//Faire ca demain
const GobalApp = ({ setCurrentUser, setShopDataToApp ,isLoading,...rest}) => {

    ////Set the data from firebase

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setShopDataToApp();
    }
    return () => {
      mounted = false;
    };
  }, [setShopDataToApp]);

  ///Get current user

  useEffect(() => {
    const unsubscribe = authentification.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRefer = await createUser(userAuth);

          userRefer.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        } else {
          setCurrentUser(null);
        }

        //CreateShopCollection('shopCollection' , collectionsData.map(({title ,items}) => ({title ,items})));
      }
    );
    return () => {
      unsubscribe && unsubscribe();
    };
  }, [setCurrentUser]);



  return <AppWrapping isLoading={isLoading} {...rest}/>
}




const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(SetCurrentUser(user));
    },
    //set my data
     setShopDataToApp: () => {
      dispatch(fetchShopDataAsync());
    }
  };
};


/* const mapStateToProps = createStructuredSelector({
  collectionsData : shopDataSelector
}) */

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsDataFetching,
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(GobalApp);
