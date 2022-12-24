import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllRecipesSelector} from '../store/selectors/recipesSelectors';
import {View, Text, StyleSheet} from 'react-native';

const MainScreen = () => {
  const dispatch = useDispatch();
  const getAllRecipes = useSelector(getAllRecipesSelector);

  useEffect(() => {
    dispatch(getAllRecipesSelector());
  }, []);

  return (
    <View style={styles.container}>
      <Text>{getAllRecipes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
