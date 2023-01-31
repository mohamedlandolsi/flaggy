import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FlagsQuiz from "./pages/FlagsQuiz";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import TestingPage from "./pages/TestingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "flags-quiz", element: <FlagsQuiz /> },
        { path: "testing-quiz", element: <TestingPage /> },
      ],
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
