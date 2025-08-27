import "./App.css";
import { RouterProvider } from "react-router";
import { routes } from "./routes/routes";
import { ConfigProvider } from "antd";
import { componentTheme } from "./globals/componentTheme";

function App() {
  return (
    <ConfigProvider theme={componentTheme}>
      <RouterProvider router={routes} />
    </ConfigProvider>
  );
}

export default App;
