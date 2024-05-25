import "@/app/assets/styles/global.css";
export const metadata = {
  title: "Property Project | Find the rental property",
  description: "Easy way to find the property",
  keywords: "rental, find rentals, find properties",
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
