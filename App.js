import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import BottomSearchBar from "react-native-bottom-search-bar";
import { AppleHeader } from "@freakycoder/react-native-header-view";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppleHeader />
        <View style={{ margin: 16 }}>
          <BouncyCheckbox
            isChecked={false}
            textColor="#000"
            unfillColor="white"
            text="Custom Icon Example"
          />
          <BouncyCheckbox
            onPress={checked => {
              alert(checked);
            }}
          />
          <BouncyCheckbox text="Get groceries" />
          <BouncyCheckbox isChecked text="Pay the bills" />
          <BouncyCheckbox text="Take out of the trash 💩" />
          <BouncyCheckbox text="Buy tickets for concert 🎉 🎊" />
          <BouncyCheckbox
            isChecked
            disableTextDecoration
            text="Try new gym routine"
          />
          <BouncyCheckbox isChecked text="Do a load of laundry" />
        </View>
        <BottomSearchBar />
      </SafeAreaView>
    </View>
  );
};

export default App;
