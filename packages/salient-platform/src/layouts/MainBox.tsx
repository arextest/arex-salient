import routes from "~react-pages";
import { useNavigate, useRoutes } from "react-router-dom";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

const MainBox = () => {
  const nav = useNavigate();
  const { t } = useTranslation();
  return (
    <div>
      <Button
        onClick={() => {
          nav(`/home`);
        }}
      >
        {t("action.cancel")}
      </Button>
      {useRoutes(routes)}
    </div>
  );
};

export default MainBox;
