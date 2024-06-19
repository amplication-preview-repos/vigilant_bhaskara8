import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CmdbDataList } from "./cmdbData/CmdbDataList";
import { CmdbDataCreate } from "./cmdbData/CmdbDataCreate";
import { CmdbDataEdit } from "./cmdbData/CmdbDataEdit";
import { CmdbDataShow } from "./cmdbData/CmdbDataShow";
import { ArisDataList } from "./arisData/ArisDataList";
import { ArisDataCreate } from "./arisData/ArisDataCreate";
import { ArisDataEdit } from "./arisData/ArisDataEdit";
import { ArisDataShow } from "./arisData/ArisDataShow";
import { TokenStorageList } from "./tokenStorage/TokenStorageList";
import { TokenStorageCreate } from "./tokenStorage/TokenStorageCreate";
import { TokenStorageEdit } from "./tokenStorage/TokenStorageEdit";
import { TokenStorageShow } from "./tokenStorage/TokenStorageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ApiBridgeService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CmdbData"
          list={CmdbDataList}
          edit={CmdbDataEdit}
          create={CmdbDataCreate}
          show={CmdbDataShow}
        />
        <Resource
          name="ArisData"
          list={ArisDataList}
          edit={ArisDataEdit}
          create={ArisDataCreate}
          show={ArisDataShow}
        />
        <Resource
          name="TokenStorage"
          list={TokenStorageList}
          edit={TokenStorageEdit}
          create={TokenStorageCreate}
          show={TokenStorageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
